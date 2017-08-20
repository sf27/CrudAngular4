import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import config from '../../app.config';
import {Post} from '../models/post.models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
  private getOptions: RequestOptions = new RequestOptions({
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    })
  });

  private postOptions: RequestOptions = new RequestOptions({
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  });

  constructor(private http: Http) {
  }

  addPost(data: Post) {
    return this.http.post(
      config.API_URL + 'posts',
      data,
      this.postOptions
    );
  }

  editPost(data: Post) {
    return this.http.put(
      config.API_URL + 'posts/' + data.id,
      data,
      this.postOptions
    );
  }

  deletePost(data: Post) {
    return this.http.delete(config.API_URL + 'posts/' + data.id);
  }

  getAllPosts() {
    return this.http.get(
      config.API_URL + 'posts',
      this.getOptions
    );
  }

  getPostById(id) {
    return this.http.get(
      config.API_URL + 'posts/' + id,
      this.getOptions
    ).toPromise();
  }
}
