import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { EquipesService } from '@app/_services';
import { Equipe } from '@app/_models';

@Component({
  selector: 'list-equipes',
  templateUrl: 'list-equipes.component.html',
})
export class ListEquipesComponent implements OnInit {
  equipes!: Equipe[];

  constructor(private equipesService: EquipesService) {}

  ngOnInit() {
    this.equipesService
      .getAll()
      .pipe(first())
      .subscribe((equipes) => (this.equipes = equipes));
  }

  deleteEquipe(id: string) {
    const equipe = this.equipes.find((x) => x.id === id);
    if (!equipe) return;
    equipe.isDeleting = true;
    this.equipesService
      .delete(id)
      .pipe(first())
      .subscribe(
        () => (this.equipes = this.equipes.filter((x) => x.id !== id))
      );
  }
}
