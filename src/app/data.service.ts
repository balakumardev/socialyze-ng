import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
/**
 * Created by balak on 7/12/2017.
 */

@Injectable()
export class DataService {
  constructor(private http: Http) {}

  getHashtags(id : number) {
    return this.http.get('http://localhost:8080/hs/' + id);
  }

  getCategories() {
    return this.http.get('http://localhost:8080/hashtag/tweetcategories');
  }

  getTweets(hashtag: string, num: number) {
    return this.http.get('http://localhost:8080/hs/'+ hashtag + '/' + num);
  }

  getNumTweetsByUser(id: string, hashtag: string) {
    return this.http.get('http://localhost:8080/hashtag/'+hashtag+'/'+id);
  }
  putHashtag(id: number,hashtag : string){
	  return this.http.get('http://localhost:8080/hashtags/'+hashtag+'?category='+id);
  }
  removehashtag(hashtag: string){
	  	  return this.http.get('http://localhost:8080/removehashtag/'+hashtag);

  }
  getstatus(name : string){
    return this.http.get('http://localhost:8080/getstatus/'+name);
  }

}
