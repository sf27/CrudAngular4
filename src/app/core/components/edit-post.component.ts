import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../services/post.service';
import {Location} from '@angular/common';
import {MdSnackBar} from '@angular/material';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-post-edit',
  templateUrl: '../templates/edit-post.component.html',
})
export class EditPostComponent implements OnInit {
  post: any = {};

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private location: Location,
              private snackBar: MdSnackBar) {
  }

  ngOnInit(): void {
    this.post = this.route.snapshot.data['post'];
  }

  goBack(): void {
    this.location.back();
  }

  editPost(form) {
    if (form.errors) {
      this.snackBar.open('Please, fill correctly the form: ' + form.errors, 'Ok', {
        duration: 9000
      });
    } else {
      this.postService.editPost(this.post).subscribe(
        data => {
          if (data.ok) {
            this.snackBar.open('Post edited successfully', 'Ok', {
              duration: 9000
            });
            this.goBack();
          } else {
            this.snackBar.open('An error has occurred: ' + data.statusText, 'Ok', {
              duration: 9000
            });
          }
        },
        error => {
          console.log('Error: ', error);
          this.snackBar.open('An error has occurred: ' + error, 'Ok', {
            duration: 9000
          });
        }
      )
    }
  }
}
