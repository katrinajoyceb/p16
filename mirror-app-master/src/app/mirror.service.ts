import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MirrorService {

    health = 'http://localhost:4000/health';
    activity = 'http://localhost:4000/activity';
    sleep =  'http://localhost:4000/sleep';
    messages = 'http://localhost:4000/messages';
    news = 'http://localhost:4000/news';
    schedule = 'http://localhost:4000/schedule';
    twitter = 'http://localhost:4000/twitter';




  constructor(private http: HttpClient) { }


  getHealth() {
    return this
           .http
           .get(`${this.health}`);
  }

  getActivity() {
    return this
           .http
           .get(`${this.activity}`);
  }

  getSleep() {
    return this
           .http
           .get(`${this.sleep}`);
  }

  getMessages() {
    return this
           .http
           .get(`${this.messages}`);
  }
  getNews() {
    return this
           .http
           .get(`${this.news}`);
  }
  getSchedule() {
    return this
           .http
           .get(`${this.schedule}`);
  }
  getTwitter() {
    return this
           .http
           .get(`${this.twitter}`);
  }
}
