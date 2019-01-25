import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppRoutingModule, routes } from "./app-routing.module";
import { StudentComponent } from "./student/student.component";
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [AppComponent, StudentComponent, StudentdetailsComponent, PagenotfoundComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
