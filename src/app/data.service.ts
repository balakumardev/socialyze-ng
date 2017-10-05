import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

/**
 * Created by balak on 7/12/2017.
 */

@Injectable()
export class DataService {
  constructor(private http: Http) {
  }

  getHashtags(id: number) {
    return this.http.get('http://app.socialyze.in:8088/hs/' + id);
  }

  gettrackedhashtags(id: number) {
    return this.http.get('http://app.socialyze.in:8088/trackedhs/' + id);
  }

  getCategories() {
    return this.http.get('http://app.socialyze.in:8088/hashtag/tweetcategories');
  }

  getTweets(hashtag: string, num: number) {
    return this.http.get('http://app.socialyze.in:8088/hs/' + hashtag + '/' + num);
  }

  getNumTweetsByUser(id: string, hashtag: string) {
    return this.http.get('http://app.socialyze.in:8088/hashtag/' + hashtag + '/' + id);
  }

  gettrackedhashtagstatus(hashtag: string) {
    return this.http.get('http://app.socialyze.in:8088/tracked_hashtag_status/' + hashtag);
  }

  putHashtag(id: number, hashtag: string) {
    return this.http.get('http://app.socialyze.in:8080/hashtags/' + hashtag + '?category=' + id);
  }

  removehashtag(hashtag: string) {
    return this.http.get('http://app.socialyze.in:8088/removehashtag/' + hashtag);
  }

  updatestatus(name: string) {
    return this.http.put('http://app.socialyze.in:8088/updatestatus/' + name, name);
  }

  getstatus(name: string) {
    return this.http.get('http://app.socialyze.in:8088/getstatus/' + name);
  }

}
