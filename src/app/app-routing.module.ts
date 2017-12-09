import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {ModeratorHomeComponent} from "./modules/moderator/moderator-home/moderator-home.component";

const appRoutes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "moderator",
    component: ModeratorHomeComponent
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
