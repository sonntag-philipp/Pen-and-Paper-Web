import { Component, OnInit } from '@angular/core';
import {StoryModel} from "../../shared/models/story.model";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  public story: StoryModel;

  constructor() { }

  ngOnInit() {
  }

}
