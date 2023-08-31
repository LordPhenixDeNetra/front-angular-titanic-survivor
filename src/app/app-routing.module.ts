import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SurvivorTestComponent} from "./components/survivor-test/survivor-test.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path : "", component : AppComponent},
  {path : "survivor-test", component : SurvivorTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
