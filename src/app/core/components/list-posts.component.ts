import {Component, OnInit} from '@angular/core';
import {PostData} from '../models/post.models';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';
import {MdDialog, MdSnackBar} from '@angular/material';
import {DeletePostComponent} from './delete-post.component';

@Component({
  selector: 'app-list-posts',
  templateUrl: '../templates/list-posts.component.html',
})
export class ListPostsComponent implements OnInit {

  posts: PostData[];
  color = 'primary';
  mode = 'indeterminate';

  constructor(private postService: PostService,
              private router: Router,
              private dialog: MdDialog,
              private snackBar: MdSnackBar) {
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      data => {
        this.posts = data.json();
      },
      error => {
        console.log('Error: ', error);
        this.snackBar.open("An error has occurred: " + error, "Ok", {
          duration: 9000
        });
      }
    )
  }

  gotoInfo(id): void {
    this.router.navigate(['/post/info', id]);
  }

  gotoEdit(id): void {
    this.router.navigate(['/post/edit', id]);
  }

  gotoAdd(): void {
    this.router.navigate(['/post/add']);
  }

  gotoDelete(id) {
    let dialogRef = this.dialog.open(DeletePostComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'YES'){
        let post = new PostData(id);
        this.postService.deletePost(post).subscribe(
          data => {
            if(data.ok){
              this.snackBar.open("Post delete successfully", "Ok", {
                duration: 9000
              });
            } else {
              this.snackBar.open("An error has occurred: " + data.statusText, "Ok", {
                duration: 9000
              });
            }
          },
          error => {
            console.log('Error: ', error);
            this.snackBar.open("An error has occurred: " + error, "Ok", {
              duration: 9000
            });
          }
        )
      }
    });
  }

}
