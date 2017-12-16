import { Component, OnInit } from '@angular/core';
import {ToolbarService} from "./toolbar.service";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public toolbarService: ToolbarService,
    private fireAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  public onBtnLogin(): void {
    this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public onBtnLogout(): void {
    this.fireAuth.auth.signOut();
  }



}
