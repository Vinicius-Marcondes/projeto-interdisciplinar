import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutEquipesComponent } from './layout.component';
import { ListEquipesComponent } from './list-equipes.component';
import { AddEditEquipesComponent } from './add-edit-equipes.component';
import { AddEditParticipantesComponent } from './participantes/add-edit-participantes.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutEquipesComponent,
    children: [
      { path: '', component: ListEquipesComponent },
      { path: 'add', component: AddEditEquipesComponent },
      { path: 'edit/:id', component: AddEditEquipesComponent },
      {
        path: 'edit/:id/addParticipante',
        component: AddEditParticipantesComponent,
      },
      {
        path: 'edit/:id/edit/:participanteId',
        component: AddEditParticipantesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipesRoutingModule {}
