import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadmePageComponent } from './readme-page/readme-page.component';  // 1. Importe o componente ReadmePage
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'readme', component: ReadmePageComponent }
];  // 2. Defina a rota para o componente];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
