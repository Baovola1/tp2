import { Injectable } from '@angular/core';
import { Article } from './article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

   getArticles(): Article[]{
     return[
         new Article("Angular2",'http://angular.io',3),
         new Article('FullStack', 'http://fullstack.io',2)
    ]
   }

  
  constructor() { }
}
