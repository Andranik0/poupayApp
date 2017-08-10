import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';

import { SoundBoxPage } from '../pages/soundbox/soundbox';
import { BoukiTvPage } from '../pages/boukitv/boukitv';
import { HomePage } from '../pages/home/home';
import { GifsPage } from '../pages/lesgifs/lesgifs';
import { TabsPage } from '../pages/tabs/tabs';
import { BoukiBoutiquePage } from '../pages/boukiboutique/boukiboutique';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    BoukiTvPage,
    HomePage,
    SoundBoxPage,
    GifsPage,
    TabsPage,
    BoukiBoutiquePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BoukiTvPage,
    SoundBoxPage,
    GifsPage,
    HomePage,
    TabsPage,
    BoukiBoutiquePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
