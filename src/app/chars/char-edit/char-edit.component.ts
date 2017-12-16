import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToolbarService} from "../../toolbar/toolbar.service";
import {CharModel} from "../../shared/models/char.model";
import {AngularFirestore} from "angularfire2/firestore";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-char-edit',
  templateUrl: './char-edit.component.html',
  styleUrls: ['./char-edit.component.css']
})
export class CharEditComponent implements OnInit {

  public char: CharModel;

  constructor(
    private tb: ToolbarService,
    private route: ActivatedRoute,
    private db: AngularFirestore
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

}
