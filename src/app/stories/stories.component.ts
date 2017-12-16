import { Component, OnInit } from '@angular/core';
import {InputDialogComponent} from "../dialogs/input-dialog/input-dialog.component";
import {MatDialog} from "@angular/material";
import {StoryModel} from "../shared/models/story.model";
import {ToolbarService} from "../toolbar/toolbar.service";

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  public stories: StoryModel[] = [];

  constructor(
    private dialog: MatDialog,
    private tb: ToolbarService
  ) { }

  ngOnInit() {
    this.tb.title = "Story-Bibliothek";
  }

  public onBtnNewStory(): void {
    this.dialog.open(InputDialogComponent, {
      data: {
        title: "Neue Story",
        buttons: [
          {name: "Erstellen", value: false}
        ],
        inputs: [
          {name: "Name der Story", value: "", type: "text"}
        ]
      }
    }).afterClosed().subscribe(
      (next) => {
        console.log(next);
      }
    );
  }

}
