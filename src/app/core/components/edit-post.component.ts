import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PostService} from '../services/post.service';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-post-edit',
  templateUrl: '../templates/edit-post.component.html',
})
export class EditPostComponent {
  post: any = {};
  id: string;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private location: Location,
              private snackBar: MdSnackBar) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.postService.getPostById(+params.get('id')))
      .subscribe(post => this.post = post.json());
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
