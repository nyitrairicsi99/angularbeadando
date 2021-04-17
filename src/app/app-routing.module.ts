import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'details', component: DetailsComponent,canActivate: [AuthGuard] },
  { path: 'list', component: ListComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
