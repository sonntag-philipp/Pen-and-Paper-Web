import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {IndexComponent} from './index/index.component';
import {AppRoutingModule} from "./app-routing.module";
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ToolbarService} from "./toolbar/toolbar.service";
import {DialogsModule} from "./dialogs/dialogs.module";
import {MessageDialogComponent} from "./dialogs/message-dialog/message-dialog.component";
import {ConfirmationDialogComponent} from "./dialogs/confirmation-dialog/confirmation-dialog.component";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AppFirebaseModule} from "./app-firebase.module";
import {CharsComponent} from "./chars/chars.component";
import {CharComponent} from "./chars/char/char.component";
import {CharEditComponent} from "./chars/char-edit/char-edit.component";
import {ErrorPageComponent} from "./shared/components/error-page/error-page.component";
import {InputDialogComponent} from "./dialogs/input-dialog/input-dialog.component";
import {StoriesComponent} from "./stories/stories.component";
import {StoryComponent} from "./stories/story/story.component";
import {StoryEditComponent} from "./stories/story-edit/story-edit.component";



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ToolbarComponent,
    ErrorPageComponent,
    CharsComponent,
    CharComponent,
    CharEditComponent,
    StoriesComponent,
    StoryComponent,
    StoryEditComponent
  ],
  imports: [
    // Other Modules
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    // Local Modules
    AppFirebaseModule,
    AppRoutingModule,
    DialogsModule,

    // Firebase Imports
    AngularFireAuthModule,
    AngularFirestoreModule,

    // Material Design imports
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [
    ToolbarService
  ],
  entryComponents: [
    MessageDialogComponent,
    ConfirmationDialogComponent,
    InputDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
