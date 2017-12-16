import { Component, OnInit } from '@angular/core';
import {ToolbarService} from "../toolbar/toolbar.service";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private toolbarService: ToolbarService,
    public fireAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.toolbarService.title = "";
  }
}
