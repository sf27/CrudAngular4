import {Component} from '@angular/core';
import {PostService} from '../services/post.service';
import {Location} from '@angular/common';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-post-add',
  templateUrl: '../templates/add-post.component.html',
})
export class AddPostComponent {
  post: any = {};
  id: string;

  constructor(private postService: PostService,
              private location: Location,
              private snackBar: MdSnackBar) {
  }

  goBack(): void {
    this.location.back();
  }

  createPost(form) {
    if (form.errors) {
      this.snackBar.open('Please, fill correctly the form: ' + form.errors, 'Ok', {
        duration: 9000
      });
    } else {
      this.postService.addPost(this.post).subscribe(
        data => {
          if (data.ok) {
            this.snackBar.open('Post added successfully', 'Ok', {
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
