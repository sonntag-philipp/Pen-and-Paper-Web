import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {MessageDialogComponent} from "../modules/dialogs/message-dialog/message-dialog.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public onBtnRegister(): void {
    this.dialog.open(MessageDialogComponent, {
      width: "400px",
      data: {
        title: "Registrierung",
        message: "Die Registrierung ist leider noch nicht möglich. Wende dich dafür bitte an einen Admin von Delaiyoid.de"
      }
    });
  }

}
