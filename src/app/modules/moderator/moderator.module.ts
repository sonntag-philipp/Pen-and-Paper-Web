import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeratorHomeComponent } from './moderator-home/moderator-home.component';
import {MatCardModule, MatTableModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule
  ],
  declarations: [
    ModeratorHomeComponent
  ]
})
export class ModeratorModule { }
