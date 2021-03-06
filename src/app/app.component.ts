import { Component } from '@angular/core';
import { Platform, ModalController, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { BoukiBoutiquePage } from '../pages/boukiboutique/boukiboutique';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public modalCtrl: ModalController,  public alertCtrl: AlertController, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      menuCtrl.enable(true);
    });
  }

  boutiqueModal() {
    let modal = this.modalCtrl.create(BoukiBoutiquePage);
    modal.present();
  }

  unavailableFeature() {
    let alert = this.alertCtrl.create({
      title: 'Patience Poupon!',
      subTitle: 'Cette zone de l\'application n\'est pas encore débloquée... Il faut attendre la version 2. Huhu.',
      buttons: ['Oh. Le petit cul.']
    });
    alert.present();
  }

}
