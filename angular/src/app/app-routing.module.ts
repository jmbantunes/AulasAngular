import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NComponent } from './Calculadora/n.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { HomeComponent } from './home/home.component';
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component';

const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"",component:HomeComponent},
  {path:"calculator",component:NComponent}, //calculadora
  {path:"readmeGen",component: ReadMeGeneratorComponent},
  {path:"experiments",component: ExperimentsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
