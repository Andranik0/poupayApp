import { Component } from '@angular/core';
import { NavController, LoadingController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';
import { Http } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  USER: Observable<any>;
  userMoney: number;

  posts: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider, public loadingCtrl: LoadingController, public http: Http) {
    this.apiProvider.dailyConnectAward();
    this.LoadData();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.refreshPage();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  LoadData() {
    this.USER = this.apiProvider.getUser();
    this.USER.subscribe(data => {
      this.userMoney = data[0].money;
    });
    this.posts = this.apiProvider.getFeedPosts();
  }

  refreshPage() {
    this.LoadData();
  }

}
