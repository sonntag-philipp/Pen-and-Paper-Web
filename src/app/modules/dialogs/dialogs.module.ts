import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import {MatButtonModule, MatDialogModule} from "@angular/material";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    MessageDialogComponent
  ],
  declarations: [
    MessageDialogComponent,
    ConfirmationDialogComponent
  ]
})
export class DialogsModule { }
