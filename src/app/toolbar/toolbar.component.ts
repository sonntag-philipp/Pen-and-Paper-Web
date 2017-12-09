import { Component, OnInit } from '@angular/core';
import {ToolbarService} from "./toolbar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public toolbarService: ToolbarService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
