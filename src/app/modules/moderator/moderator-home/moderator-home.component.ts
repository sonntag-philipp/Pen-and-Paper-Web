import { Component, OnInit } from '@angular/core';
import {ToolbarService} from "../../../toolbar/toolbar.service";
import {MatDialog} from "@angular/material";
import {ConfirmationDialogComponent} from "../../dialogs/confirmation-dialog/confirmation-dialog.component";
import {MessageDialogComponent} from "../../dialogs/message-dialog/message-dialog.component";
import {ModeratorService} from "../services/moderator.service";
import {StoryModel} from "../../../shared/models/story.model";

@Component({
  selector: 'app-moderator-home',
  templateUrl: './moderator-home.component.html',
  styleUrls: ['./moderator-home.component.css']
})
export class ModeratorHomeComponent implements OnInit {

  public columns = ['name', 'characters'];

  constructor(
    private toolbarService: ToolbarService,
    private moderatorService: ModeratorService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.toolbarService.title = "Christoph - Dashboard";
  }

  public onBtnArchieve(story: StoryModel): void {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: "Wirklich archivieren?",
        message: "Durch die Archivierung kannst du die Geschichte nicht mehr starten. Wirklich fortfahren?"
      }
    }).afterClosed().subscribe(
      (result) => {
          if (result.confirmed) {
            console.log("Confirmed");
          }
      }
    );
  }

  public onBtnStart(story: StoryModel): void {
    this.dialog.open(MessageDialogComponent, {
      data: {
        title: "Wird gestartet...",
        message: ""
      }
    });
  }

}
