import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
