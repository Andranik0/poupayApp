import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  INIT_DATA: boolean = true;
  USER: Observable<any>;
  assets: string;
  userMoney: number;

  posts: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider, public loadingCtrl: LoadingController) {
    this.assets = this.apiProvider.GetAssetsDomain();
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
    let loader = this.loadingCtrl.create({
      content: "Attends un chouille, ma petite caille !"
    });
    if (this.INIT_DATA) {
      loader.present();
    }

    this.USER = this.apiProvider.getUser();
    this.USER.subscribe(data => {
      this.userMoney = data[0].money;
    });
    this.posts = this.apiProvider.getFeedPosts();
    this.posts.subscribe(data => {
      if (this.INIT_DATA) {
        loader.dismiss();
        this.INIT_DATA = false;
      }
    });
  }

  refreshPage() {
    this.LoadData();
  }

}
