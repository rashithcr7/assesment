import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssesmentComponent } from './Component/assesment/assesment.component';
import { LoginComponent } from './Component/login/login.component';
const routes: Routes = [
  { path: "Login", component: LoginComponent },
  { path: "todo", component: LoginComponent },
  {path: "assesment", component: AssesmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
