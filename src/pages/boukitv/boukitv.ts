import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-boukitv',
  templateUrl: 'boukitv.html'
})
export class BoukiTvPage {
  users: Observable<any>;
  posts: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.users = this.apiProvider.getUser();
    this.posts = this.apiProvider.getBoukiTvPosts();
  }

}
