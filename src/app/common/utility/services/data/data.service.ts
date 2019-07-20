import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../../../environments/environment';

/**
 * Data Service
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, ) { }

  /**
   * Get tweets by hashtag
   * @param hashtag 
   */
  getTweetsByHashtag(hashtag: string): Observable<any> {
    return this.http.get(`${env.api}/hashtags/${hashtag}?pages_limit=3&wait=0`);
  }
}
