import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-boukiboutique',
  templateUrl: 'boukiboutique.html'
})
export class BoukiBoutiquePage {
  users: Observable<any>;
  posts: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider, public viewCtrl: ViewController) {
    this.users = this.apiProvider.getUser();
    this.posts = this.apiProvider.getBoukiBoutique();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
