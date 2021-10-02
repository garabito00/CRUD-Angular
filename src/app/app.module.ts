import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './Componentes/home/home.component';
import { CreateComponent } from './Componentes/create/create.component';
import { UpdateComponent } from './Componentes/update/update.component';
import { NotFoundComponent } from './Componentes/not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    UpdateComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
