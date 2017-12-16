import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.css']
})
export class InputDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public onBtnClick(item: any) {
    item.value = true;
    this.dialogRef.close(this.data);
  }

  private getType(item: any): string {
    if (item.type === null) {
      return "text";
    } else {
      return item.type;
    }
  }
}
