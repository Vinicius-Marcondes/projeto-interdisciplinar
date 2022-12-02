import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EquipesRoutingModule } from './equipes-routing.module';
import { LayoutEquipesComponent } from './layout.component';
import { ListEquipesComponent } from './list-equipes.component';
import { AddEditEquipesComponent } from './add-edit-equipes.component';
import { AddEditParticipantesComponent } from './participantes/add-edit-participantes.component';
import { ListParticipantesComponent } from './participantes/list-participantes.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, EquipesRoutingModule],
  declarations: [
    LayoutEquipesComponent,
    ListEquipesComponent,
    AddEditEquipesComponent,
    AddEditParticipantesComponent,
    ListParticipantesComponent,
  ],
  exports: [AddEditParticipantesComponent, ListParticipantesComponent],
})
export class EquipesModule {}
