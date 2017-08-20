import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {PostService} from './post.service';
import {Post} from '../models/post.models';

@Injectable()
export class PostResolve implements Resolve<Post> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.postService.getPostById(route.paramMap.get('id'))
      .then((post: any) => post.json());
  }
}
