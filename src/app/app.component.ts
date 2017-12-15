import {Component, OnInit} from '@angular/core';
import {ToolbarService} from "./toolbar/toolbar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private toolbarService: ToolbarService) {

  }

  ngOnInit(): void {

  }

}
