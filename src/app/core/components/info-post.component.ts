import {Component, OnInit} from '@angular/core';
import {Post} from '../models/post.models';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-post-info',
  templateUrl: '../templates/info-post.component.html',
})
export class InfoPostComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.post = this.route.snapshot.data['post'];
  }
}
