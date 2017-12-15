import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {MessageDialogComponent} from "../dialogs/message-dialog/message-dialog.component";
import {ToolbarService} from "../toolbar/toolbar.service";
import {AngularFirestore} from "angularfire2/firestore";
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private toolbarService: ToolbarService,
    private db: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
    this.db.collection('stories').doc('s2pLTaCUVo4JAl314dH7').valueChanges().subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log("Complete");
      }
    );
  }

  ngOnInit() {
    this.toolbarService.title = "Home";
  }

  public onBtnRegister(): void {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
