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
    return this.http.get('http://localhost:8081/hs/' + id);
  }

  getCategories() {
    return this.http.get('http://localhost:8081/hashtag/tweetcategories');
  }

  getTweets(hashtag: string, num: number) {
    return this.http.get('http://localhost:8081/hs/' + hashtag + '/' + num);
  }

  getNumTweetsByUser(id: string, hashtag: string) {
    return this.http.get('http://localhost:8081/hashtag/' + hashtag + '/' + id);
  }

  putHashtag(id: number, hashtag: string) {
    return this.http.get('http://localhost:8081/hashtags/' + hashtag + '?category=' + id);
  }

  removehashtag(hashtag: string) {
    return this.http.get('http://localhost:8081/removehashtag/' + hashtag);
  }
  updatestatus(name : string){
    return this.http.put('http://localhost:8081/updatestatus/'+name,name);
  }
  getstatus(name : string){
  return this.http.put('http://localhost:8081/getstatus/'+name,name);

  }

}
