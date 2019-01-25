import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";
import { StudentComponent } from "./student/student.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class AppRoutingModule {}
export const routes: Routes = [
  {
    path: "",
    redirectTo: "student",
    pathMatch: "full"
  },
  {
    path: "student",

    children: [
      { path: "", component: StudentComponent },
      { path: "studentdetails", component: StudentdetailsComponent }
    ]
  },
  {
    path: "**",
    component: PagenotfoundComponent
  }
];
