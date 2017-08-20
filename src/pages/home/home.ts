import { Component } from '@angular/core';
import { NavController, LoadingController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  USER: Observable<any>;
  userMoney: number;

  posts: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider, public loadingCtrl: LoadingController) {
    this.USER = this.apiProvider.getUser();
    this.USER.subscribe(data => {
      this.userMoney = data[0].money;
    });
    this.posts = this.apiProvider.getFeedPosts();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
      duration: 3000
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
  }
}
