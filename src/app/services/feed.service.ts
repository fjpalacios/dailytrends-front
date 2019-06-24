import { Feed } from './../models/feed';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private URL_API = 'http://localhost:3000/api/v1/feed/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Feed[]> {
    return this.http.get<Feed[]>(this.URL_API)
      .pipe(map((data: any) => data.feeds));
  }

  getOne(id: string): Observable<Feed> {
    return this.http.get<Feed>(`${this.URL_API}${id}`)
      .pipe(map((data: any) => data.feed));
  }

  update(id: string, feed: Feed): void {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.put(`${this.URL_API}${id}`, { feed }, httpOptions)
      .subscribe((res: Response) => console.log);
  }
}
