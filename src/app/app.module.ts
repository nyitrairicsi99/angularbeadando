import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    DetailsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
