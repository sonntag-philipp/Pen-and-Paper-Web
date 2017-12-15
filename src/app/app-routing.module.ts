import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {CharComponent} from "./chars/char/char.component";
import {CharsComponent} from "./chars/chars.component";
import {CharEditComponent} from "./chars/char-edit/char-edit.component";
import {ErrorPageComponent} from "./shared/components/error-page/error-page.component";

const appRoutes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    // TODO: Use a resolver
    path: "chars",
    component: CharsComponent
  },
  {
    path: "chars/:id",
    component: CharComponent
  },
  {
    path: "chars/:id/edit",
    component: CharEditComponent
  },
  {
    path: "**",
    redirectTo: "not-found"
  },
  {
    path: "not-found",
    component: ErrorPageComponent
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
