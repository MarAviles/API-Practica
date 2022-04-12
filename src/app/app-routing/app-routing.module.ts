import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../component/user/user.component';
import { ClimaComponent } from '../components/clima/clima.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UserComponent
  },
  {
    path: '',
    redirectTo: 'usuarios', pathMatch:'full'
  },
  {
    path: 'clima',
    component: ClimaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }