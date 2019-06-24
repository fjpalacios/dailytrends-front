import { Feed } from './../models/feed';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private URL_API = 'http://localhost:3000/api/v1/feed/';
  constructor(private http: HttpClient, private router: Router) { }

  create(feed: Feed): void {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(`${this.URL_API}`, { feed }, httpOptions)
      .subscribe((res) => {
        this.router.navigate(['/feed', res.id]);
      });
  }

  getAll(): Observable<Feed[]> {
    return this.http.get<Feed[]>(this.URL_API)
      .pipe(map((data: any) => data.feeds));
  }

  getOne(id: string): Observable<Feed> {
    return this.http.get<Feed>(`${this.URL_API}${id}`)
      .pipe(map((data: any) => data.feed));
  }

  getLatest(): Observable<Feed[]> {
    return this.http.get<Feed[]>(`${this.URL_API}latest`)
      .pipe(map((data: any) => data.feeds));
  }

  update(id: string, feed: Feed): void {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.put(`${this.URL_API}${id}`, { feed }, httpOptions)
      .subscribe((res: Response) => {
        this.router.navigate(['/feed', id]);
      });
  }

  delete(id: string): void {
    this.http.delete(`${this.URL_API}${id}`)
      .subscribe((res: Response) => {
        this.router.navigate(['/feeds']);
      });
  }
}
