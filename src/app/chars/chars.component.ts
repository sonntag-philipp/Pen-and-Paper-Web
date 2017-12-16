import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToolbarService} from "../toolbar/toolbar.service";
import {CharModel} from "../shared/models/char.model";
import {AngularFirestore} from "angularfire2/firestore";
import {MatDialog} from "@angular/material";
import {InputDialogComponent} from "../dialogs/input-dialog/input-dialog.component";

@Component({
  selector: 'app-chars',
  templateUrl: './chars.component.html',
  styleUrls: ['./chars.component.css']
})
export class CharsComponent implements OnInit {

  private chars: CharModel[]= [];

  constructor(
    private db: AngularFirestore,
    private tb: ToolbarService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.tb.title = "Charakter-Bibliothek";
  }

  public onBtnNewCharacter(): void {
    this.dialog.open(InputDialogComponent, {
      data: {
        title: "Neuer Charakter",
        buttons: [
          {name: "Okay", value: false}
        ],
        inputs: [
          {name: "Name des Charakters", value: "", type: "text"}
        ]
      }
    }).afterClosed().subscribe(
      (next) => {
        console.log(next);
      }
    );
  }

}
