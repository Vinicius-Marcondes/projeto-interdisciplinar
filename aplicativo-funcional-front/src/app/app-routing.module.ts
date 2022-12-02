import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';

const usersModule = () =>
  import('./users/users.module').then((x) => x.UsersModule);
const equipesModule = () =>
  import('./_components/equipes/equipes.module').then((x) => x.EquipesModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', loadChildren: usersModule },
  { path: 'equipes', loadChildren: equipesModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
