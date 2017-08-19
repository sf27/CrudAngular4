import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-post-info',
  templateUrl: '../templates/delete-post.component.html',
})
export class DeletePostComponent {
  constructor(public dialogRef: MdDialogRef<DeletePostComponent>) {
  }
}
