import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import { IndexComponent } from './index/index.component';
import {AppRoutingModule} from "./app-routing.module";
import { ToolbarComponent } from './toolbar/toolbar.component';
import {ToolbarService} from "./toolbar/toolbar.service";
import {DialogsModule} from "./modules/dialogs/dialogs.module";
import {MessageDialogComponent} from "./modules/dialogs/message-dialog/message-dialog.component";


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ToolbarComponent
  ],
  imports: [
    AppRoutingModule,
    DialogsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [
    ToolbarService
  ],
  entryComponents: [
    MessageDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
