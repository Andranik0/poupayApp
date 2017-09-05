import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http, public alertCtrl: AlertController) { }

  // GLOBAL VARS ------------------------------------------------------
  // ASSETS_DOMAIN = "assets/img";
  ASSETS_DOMAIN = "http://flywithmint.esy.es/poupayApp/assets";
  API_DOMAIN = "https://poupay-api.herokuapp.com/api/";

  // GET AND SET functions --------------------------------------------
  // CONTENT functions  -
  getFeedPosts() {
    // .subscribe(data => { console.log('my data: ', data); })
    return this.http.get(this.API_DOMAIN + 'feed').map(res => res.json());
  }

  getGifsPosts() {
    return this.http.get(this.API_DOMAIN + 'gifs').map(res => res.json());
  }

  getBoukiTvPosts() {
    return this.http.get(this.API_DOMAIN + 'boukiTv').map(res => res.json());
  }

  getSoundBox() {
    return this.http.get(this.API_DOMAIN + 'soundBox').map(res => res.json());
  }

  getBoukiBoutique(type) {
    return this.http.get(this.API_DOMAIN + 'boukiBoutique/' + type).map(res => res.json());
  }

  setContentUnlocked(postId) {
    this.http.get(this.API_DOMAIN + 'content/setUnlocked/' + postId).subscribe(data => { console.log('Post Unlocked: ', data); });
  }


  // USER functions  -
  getUser() {
    return this.http.get(this.API_DOMAIN + 'user').map(res => res.json());
  }

  setUserMoney(newValue) {
    this.http.get(this.API_DOMAIN + 'user/setMoney/' + newValue).subscribe(data => { console.log('User money: ', data); });
  }

  dailyConnectAward() {
    this.http.get(this.API_DOMAIN + 'user/connectAward').map(res => res.json()).subscribe(data => {
      if (data.affectedRows > 0) {
        let alert = this.alertCtrl.create({
          title: 'Bravo Poupay!',
          subTitle: 'C\'est la première fois que tu te connectes aujourd\'hui, tu gagnes 2 pièces Bishoue !',
          buttons: ['Ouaiiiis!']
        });
        alert.present();
      }
    });
  }

  // GLOBAL function  -
  // The function which returns the domain of the content (pictures, audios, videos...) server
  GetAssetsDomain(){
    return this.ASSETS_DOMAIN;
  }

}
