import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { CreateComponent } from './Componentes/create/create.component'
import { UpdateComponent } from './Componentes/update/update.component';
import { NotFoundComponent } from './Componentes/not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
