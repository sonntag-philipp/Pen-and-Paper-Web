import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import {MatDialogModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    MessageDialogComponent
  ],
  declarations: [
    MessageDialogComponent
  ]
})
export class DialogsModule { }
