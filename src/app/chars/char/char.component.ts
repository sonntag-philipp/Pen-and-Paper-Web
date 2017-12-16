import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFirestore} from "angularfire2/firestore";
import {CharModel} from "../../shared/models/char.model";
import {ToolbarService} from "../../toolbar/toolbar.service";
import {MatDialog} from "@angular/material";
import {ConfirmationDialogComponent} from "../../dialogs/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.css']
})
export class CharComponent implements OnInit {

  public char: CharModel;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private tb: ToolbarService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.db.collection('characters').doc<CharModel>(this.route.snapshot.paramMap.get('id')).valueChanges().subscribe(
      (next) => {
        this.char = next;
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log("Feddich");
      },
    );
  }

  public onBtnDelete(): void {
    this.dialog.open(
      ConfirmationDialogComponent, {
        data: {
          title: "Entfernung",
          message: this.char.name + " wirklich entfernen?"
        }
      }
    ).afterClosed().subscribe(
      (next) => {
        if (next !== undefined) {
          if (next.confirmed) {
            console.log("Okay");
          }
        }
      }
    );
  }

}
