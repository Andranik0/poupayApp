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

  domain = "https://poupay-api.herokuapp.com/api/";

  // GET POSTS
  getFeedPosts() {
    //http://swapi.co/api/film
    // .subscribe(data => { console.log('my data: ', data); })
    return this.http.get(this.domain + 'feed').map(res => res.json());
  }

  getGifsPosts() {
    //http://swapi.co/api/film
    // .subscribe(data => { console.log('my data: ', data); })
    return this.http.get(this.domain + 'gifs').map(res => res.json());
  }

  getBoukiTvPosts() {
    //http://swapi.co/api/film
    // .subscribe(data => { console.log('my data: ', data); })
    return this.http.get(this.domain + 'boukiTv').map(res => res.json());
  }

  getSoundBox() {
    //http://swapi.co/api/film
    // .subscribe(data => { console.log('my data: ', data); })
    return this.http.get(this.domain + 'soundBox').map(res => res.json());
  }

  getBoukiBoutique() {
    //http://swapi.co/api/film
    // .subscribe(data => { console.log('my data: ', data); })
    return this.http.get(this.domain + 'boukiBoutique').map(res => res.json());
  }

  // OTHER FUNCTIONS
  getUser() {
    return this.http.get(this.domain + 'user').map(res => res.json());
  }

}
