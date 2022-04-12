import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  baseUrl: string = 'https://gogetters.azurewebsites.net/api/Articles';

  constructor(private http: HttpClient) { }

  getArticle(Tag: string, Author: string, Favorited: string, Limit: number, Offset: number): any {
    return this.http.get(this.baseUrl + '?Tag=' + Tag + '&Author=' + Author + '&Favorited=' + Favorited + '&Limit=' + Limit + '&Offset=' + Offset)
  }

  postArticle(article: any): any {
    return this.http.post(this.baseUrl, article);
  }

}
