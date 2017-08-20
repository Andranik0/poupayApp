import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http) { }

  DOMAIN = "https://poupay-api.herokuapp.com/api/";

  // GET POSTS
  getFeedPosts() {
    // .subscribe(data => { console.log('my data: ', data); })
    return this.http.get(this.DOMAIN + 'feed').map(res => res.json());
  }

  getGifsPosts() {
    // .subscribe(data => { console.log('my data: ', data); })
    return this.http.get(this.DOMAIN + 'gifs').map(res => res.json());
  }

  getBoukiTvPosts() {
    // .subscribe(data => { console.log('my data: ', data); })
    return this.http.get(this.DOMAIN + 'boukiTv').map(res => res.json());
  }

  getSoundBox() {
    // .subscribe(data => { console.log('my data: ', data); })
    return this.http.get(this.DOMAIN + 'soundBox').map(res => res.json());
  }

  getBoukiBoutique(type) {
    // .subscribe(data => { console.log('my data: ', data); })
    return this.http.get(this.DOMAIN + 'boukiBoutique/' + type).map(res => res.json());
  }

  // OTHER FUNCTIONS
  getUser() {
    return this.http.get(this.DOMAIN + 'user').map(res => res.json());
  }

  setUserMoney(newValue){
    return this.http.get(this.DOMAIN + 'user/setMoney/' + newValue).map(res => res.json());
  }

  setContentUnlocked(postId){
    return this.http.get(this.DOMAIN + 'content/setUnlocked/' + postId).map(res => res.json());
  }

}
