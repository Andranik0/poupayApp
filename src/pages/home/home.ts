import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: Observable<any>;
  posts: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.users = this.apiProvider.getUser();
    this.posts = this.apiProvider.getFeedPosts();
  }

}
