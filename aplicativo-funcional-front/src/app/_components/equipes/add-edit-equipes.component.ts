import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { EquipesService, AlertService } from '@app/_services';
import { ListParticipantesComponent } from './participantes/list-participantes.component';

@Component({ templateUrl: 'add-edit-equipes.component.html' })
export class AddEditEquipesComponent implements OnInit {
  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  public brasaoEquipe = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private equipesService: EquipesService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      numero: ['', Validators.required],
      icone: [''],
      penalidade: ['', Validators.required],
    });

    if (!this.isAddMode) {
      this.equipesService
        .getById(this.id)
        .pipe(first())
        .subscribe((x) => this.form.patchValue(x));
    }
  }

  // get para obter facilmente os controles do form
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createEquipe();
    } else {
      this.updateEquipe();
    }
  }

  private createEquipe() {
    this.equipesService
      .create(this.form.value)
      .pipe(first())
      .subscribe(() => {
        this.alertService.success('Equipe adicionada', {
          keepAfterRouteChange: true,
        });
        this.router.navigate(['../'], { relativeTo: this.route });
      })
      .add(() => (this.loading = false));
  }

  private updateEquipe() {
    this.equipesService
      .update(this.id, this.form.value)
      .pipe(first())
      .subscribe(() => {
        this.alertService.success('Equipe atualizada', {
          keepAfterRouteChange: true,
        });
        this.router.navigate(['../../'], { relativeTo: this.route });
      })
      .add(() => (this.loading = false));
  }

  onFileSelected(event: any) {
    this.convertFile(event.target.files[0]).subscribe((base64) => {
      this.brasaoEquipe = 'data:image/png;base64,' + base64;
      this.form.controls['icone'].setValue(this.brasaoEquipe);
    });
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) =>
      result.next(btoa(reader?.result?.toString() ?? ''));
    return result;
  }
}
