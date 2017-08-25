import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-lesgifs',
  templateUrl: 'lesgifs.html'
})
export class GifsPage {
  USER: Observable<any>;
  userMoney: number;
  assets: string;

  posts: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.assets = this.apiProvider.GetAssetsDomain();
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
    this.posts = this.apiProvider.getGifsPosts();
  }

  refreshPage() {
    this.LoadData();
  }

}
