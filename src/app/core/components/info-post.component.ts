import {Component, OnInit} from '@angular/core';
import {PostData} from '../models/post.models';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PostService} from '../services/post.service';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-post-info',
  templateUrl: '../templates/info-post.component.html',
})
export class InfoPostComponent implements OnInit {
  post: PostData;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.postService.getPostById(+params.get('id')))
      .subscribe(post => this.post = post.json());
  }

  goBack(): void {
    this.location.back();
  }
}
