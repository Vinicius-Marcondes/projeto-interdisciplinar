import { Component, OnInit, Input } from '@angular/core';
import { first } from 'rxjs/operators';
import { ParticipantesService } from '@app/_services';
import { Participante } from '@app/_models';

@Component({
  selector: 'list-participantes',
  templateUrl: 'list-participantes.component.html',
})
export class ListParticipantesComponent implements OnInit {
  @Input() id_equipe: string;

  participantes: Participante[] = [];

  constructor(private participanteService: ParticipantesService) {}
  ngOnInit() {
    this.participanteService
      .getLinkByEquipeId(this.id_equipe)
      .pipe(first())
      .subscribe((linkParticipantes) =>
        linkParticipantes.forEach((link) => {
          this.adicionarParticipanteNoArray(link.participante_id);
        })
      );
  }

  adicionarParticipanteNoArray(participante_id: string) {
    this.participanteService
      .getById(participante_id)
      .pipe(first())
      .subscribe((participante) => {
        this.participantes.push(participante);
      });
  }

  deleteParticipante(id: string) {
    const user = this.participantes.find((x) => x.id === id);
    if (!user) return;
    user.isDeleting = true;
    this.participanteService
      .delete(id)
      .pipe(first())
      .subscribe(
        () =>
          (this.participantes = this.participantes.filter((x) => x.id !== id))
      );
  }
}
