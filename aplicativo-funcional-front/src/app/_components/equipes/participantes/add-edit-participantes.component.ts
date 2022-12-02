import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkParticipanteEquipe } from '@app/_models/linkParticipanteEquipe';
import { Participante } from '@app/_models/participante';
import {
  AlertService,
  ParticipantesService,
  EquipesService,
} from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit-participantes.component.html',
  styleUrls: ['./add-edit-participantes.component.less'],
})
export class AddEditParticipantesComponent implements OnInit {
  form!: FormGroup;
  id!: string;
  participanteId: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private participanteService: ParticipantesService,
    private equipesService: EquipesService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.participanteId = this.route.snapshot.params['participanteId'];
    this.isAddMode = !this.participanteId;
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
    });

    if (!this.isAddMode) {
      this.participanteService
        .getById(this.participanteId)
        .pipe(first())
        .subscribe((x) => this.form.patchValue(x));
    }
  }

  private createParticipante() {
    // 1. Criar novo participante
    this.participanteService
      .create(this.form.value)
      .pipe(first())
      .subscribe((participante) => {
        var _participante: Participante = participante as Participante;

        // 2. Vincular o participante com a equipe
        var link: LinkParticipanteEquipe = new LinkParticipanteEquipe();
        link.equipe_id = this.id;
        link.participante_id = _participante.id;

        this.equipesService
          .linkarParticipanteComEquipe(link)
          .pipe(first())
          .subscribe(() => {
            this.alertService.success('Participante adicionado', {
              keepAfterRouteChange: true,
            });
            this.router.navigate(['../'], { relativeTo: this.route });
          });
      })
      .add(() => (this.loading = false));
  }

  private updateParticipante() {
    this.participanteService
      .update(this.participanteId, this.form.value)
      .pipe(first())
      .subscribe(() => {
        this.alertService.success('Participante atualizado', {
          keepAfterRouteChange: true,
        });
        this.router.navigate(['../../'], { relativeTo: this.route });
      })
      .add(() => (this.loading = false));
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();

    // Se form for inválido, paramos a execução
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createParticipante();
    } else {
      this.updateParticipante();
    }
  }
}
