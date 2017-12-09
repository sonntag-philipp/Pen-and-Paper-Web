import { Component, OnInit } from '@angular/core';
import {ToolbarService} from "../../../toolbar/toolbar.service";

@Component({
  selector: 'app-moderator-home',
  templateUrl: './moderator-home.component.html',
  styleUrls: ['./moderator-home.component.css']
})
export class ModeratorHomeComponent implements OnInit {

  constructor(
    private toolbarService: ToolbarService
  ) { }

  ngOnInit() {
    this.toolbarService.title = "Moderator - Home";
  }

}
