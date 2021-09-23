import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {VaccinecapacityListComponent} from "./vaccinecapacity-list/vaccinecapacity-list.component";
import {MeetingListComponent} from "./meeting-list/meeting-list.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "meeting-list", component: MeetingListComponent},
  {path: "vaccinecapacity-list", component: VaccinecapacityListComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
