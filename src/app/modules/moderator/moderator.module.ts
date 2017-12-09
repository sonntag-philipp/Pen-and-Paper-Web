import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeratorHomeComponent } from './moderator-home/moderator-home.component';
import {MatButtonModule, MatCardModule, MatTableModule} from "@angular/material";
import {StoriesService} from "./services/stories.service";
import {ModeratorService} from "./services/moderator.service";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [
    ModeratorHomeComponent
  ],
  providers: [
    StoriesService,
    ModeratorService
  ]
})
export class ModeratorModule { }
