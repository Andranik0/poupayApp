import { Component } from '@angular/core';
import { NavController, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-boukiboutique',
  templateUrl: 'boukiboutique.html'
})
export class BoukiBoutiquePage {
  INIT_DATA: boolean = true;
  USER: Observable<any>;
  userMoney: number;
  assets: string;
  category: string;

  posts_images: Observable<any>;
  posts_videos: Observable<any>;
  posts_gifs: Observable<any>;
  posts_audios: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider, public viewCtrl: ViewController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.assets = this.apiProvider.GetAssetsDomain();
    this.LoadData();

    this.category = "images";
  }

  buy(post) {
    if (post.prix <= this.userMoney) {
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
              this.apiProvider.setUserMoney(this.userMoney - post.prix);
              this.apiProvider.setContentUnlocked(post.id);
              this.refreshPage();
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

    this.posts_images = this.apiProvider.getBoukiBoutique('img');
    this.posts_videos = this.apiProvider.getBoukiBoutique('video');
    this.posts_gifs = this.apiProvider.getBoukiBoutique('gif');
    this.posts_audios = this.apiProvider.getBoukiBoutique('audio');

    this.posts_images.subscribe(data => {
      if (this.INIT_DATA) {
        loader.dismiss();
        this.INIT_DATA = false;
      }
    });
  }

  refreshPage() {
    this.LoadData();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
