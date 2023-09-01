import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private client:HttpClient) { }

  getArticles():Observable<Article[]>{
    return this.client.get<Article[]>('http://localhost:3000/articles')
  }

  //création=> post

  addArticle(article:Article): Observable<Article[]>{
    return this.client.post<Article[]>('http://localhost:3000/articles',article)
  }

  //Suppression=> delete
    deleteArticle(id:number): Observable<any>{
      return this.client.delete(`http://localhost:3000/articles/${id}`)
    }
}
