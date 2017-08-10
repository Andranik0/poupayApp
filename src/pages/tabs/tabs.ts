import { Component } from '@angular/core';

import { BoukiTvPage } from '../boukitv/boukitv';
import { HomePage } from '../home/home';
import { GifsPage } from '../lesgifs/lesgifs';
import { SoundBoxPage } from '../soundbox/soundbox';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BoukiTvPage;
  tab3Root = GifsPage;
  tab4Root = SoundBoxPage;

  constructor() {

  }
}
