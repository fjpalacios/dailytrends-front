import { Feed } from './../models/feed';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private URL_API = 'http://localhost:3000/api/v1/feed/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Feed> {
    return this.http.get<Feed>(this.URL_API)
      .pipe(map((data: any) => data.feeds));
  }

  getOne(id): Observable<Feed> {
    return this.http.get<Feed>(`${this.URL_API}${id}`)
      .pipe(map((data: any) => data.feed));
  }
}
