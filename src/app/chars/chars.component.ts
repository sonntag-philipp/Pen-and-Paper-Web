import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToolbarService} from "../toolbar/toolbar.service";
import {CharModel} from "../shared/models/char.model";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {MatDialog} from "@angular/material";
import {InputDialogComponent} from "../dialogs/input-dialog/input-dialog.component";
import {AngularFireAuth} from "angularfire2/auth";
import {CharItemModel} from "../shared/models/char-item.model";
import * as firebase from 'firebase';
import {AccountModel} from "../shared/models/account.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chars',
  templateUrl: './chars.component.html',
  styleUrls: ['./chars.component.css']
})
export class CharsComponent implements OnInit {

  public chars: CharModel[]= [];
  private charIDs: string[] = [];

  constructor(
    private db: AngularFirestore,
    private tb: ToolbarService,
    private dialog: MatDialog,
    private fireAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
    this.tb.title = "Charakter-Bibliothek";


    this.fireAuth.authState.subscribe(
      next => {

        this.db.collection('accounts').doc<{chars: string[]}>(this.fireAuth.auth.currentUser.uid).valueChanges().subscribe(
          final => {
            if (final.chars !== this.charIDs) {
              this.chars = [];

              for (const item of final.chars) {

                this.db.collection('characters').doc<CharModel>(item).valueChanges().subscribe(
                  (result) => {

                    if (this.chars.includes(result)) {
                      this.chars[this.chars.indexOf(result)] = result;
                    } else {
                      this.chars.push(result);
                    }
                  }
                );
              }
            }
          }
        );
      }
    )



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
      result => {
        if (result !== undefined) {
          this.createChar(result.inputs[0].value);
        }
      }
    );
  }


  private createChar(name: string): void {
    const charID = this.db.createId();
    const charObject = {};
    const charModel = new CharModel();

    charModel.name = name;
    charModel.id = charID;
    charModel.ownerID = this.fireAuth.auth.currentUser.uid;

    Object.assign(charObject, charModel);
    this.db.collection('characters').doc(charID).set(charObject);


    // This is crazy, but the library doesn't support better functions due to the beta.
    let set = false;
    this.db.collection('accounts').doc<{chars: string[]}>(charModel.ownerID).valueChanges().subscribe(
      next => {
        const chars = next.chars;

        chars.push(charModel.id);

        if (!set) {
          this.db.collection('accounts').doc(charModel.ownerID).update({chars: chars});
        }
        set = true;
      }
    );

  }

}
