import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import {
  MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatInput, MatInputModule, MatRadioModule,
  MatToolbarModule
} from "@angular/material";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {InputDialogComponent} from "./input-dialog/input-dialog.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule
  ],
  declarations: [
    MessageDialogComponent,
    ConfirmationDialogComponent,
    InputDialogComponent
  ]
})
export class DialogsModule { }
