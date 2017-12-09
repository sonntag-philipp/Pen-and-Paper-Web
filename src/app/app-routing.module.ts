import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";

const appRoutes: Routes = [
  {
    path: "",
    component: IndexComponent
  }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule {

}
