import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-boukitv',
  templateUrl: 'boukitv.html'
})
export class BoukiTvPage {
  USER: Observable<any>;
  userMoney: number;

  posts: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.USER = this.apiProvider.getUser();
    this.USER.subscribe(data => {
      this.userMoney = data[0].money;
    });

    this.posts = this.apiProvider.getBoukiTvPosts();
  }

}
