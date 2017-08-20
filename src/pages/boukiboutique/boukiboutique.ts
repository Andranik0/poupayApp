import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-boukiboutique',
  templateUrl: 'boukiboutique.html'
})
export class BoukiBoutiquePage {
  USER: Observable<any>;
  category: string;
  userMoney: number;

  posts_images: Observable<any>;
  posts_videos: Observable<any>;
  posts_gifs: Observable<any>;
  posts_audios: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider, public viewCtrl: ViewController, public alertCtrl: AlertController) {
    this.USER = this.apiProvider.getUser();
    this.USER.subscribe(data => {
      this.userMoney = data[0].money;
    });

    this.posts_images = this.apiProvider.getBoukiBoutique('img');
    this.posts_videos = this.apiProvider.getBoukiBoutique('video');
    this.posts_gifs = this.apiProvider.getBoukiBoutique('gif');
    this.posts_audios = this.apiProvider.getBoukiBoutique('audio');

    this.category = "images";
  }

  buy(post) {
    if (post.prix<this.userMoney) {
      let confirm = this.alertCtrl.create({
        title: 'Tu veux acheter cet item, Poups ?',
        message: 'Tu ne le regretteras pas, c\'est de la qualité, noui noui.',
        buttons: [
          {
            text: 'Trop cher.',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'OUI !',
            handler: () => {
              console.log('Agree clicked');
              this.apiProvider.setUserMoney(this.userMoney-post.prix);
              this.apiProvider.setContentUnlocked(post.id);
              // this.navCtrl.pop();
              // this.navCtrl.push(BoukiBoutiquePage);
            }
          }
        ]
      });
      confirm.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Désolé ma Poups!',
        subTitle: 'T\'es fauchée ma caille, économise un peu si tu veux acheter un p\'tit quelque chose !',
        buttons: ['D\'accord Bouki...']
      });
      alert.present();
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
