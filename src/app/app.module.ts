import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,        
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   //Este componente permite manipular elementos del formulario
    HttpClientModule //Este componente permite las requisiciones (get, post, put, delete)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
