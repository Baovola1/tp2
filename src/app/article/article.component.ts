import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article!: Article;
  
  //partie pour le delete
  @Output()
  articleToDelete = new EventEmitter<number>();

  deleteArticle(article: Article){
    this.articleToDelete.emit(article.id);
  }

  constructor(){
    // this.article = new Article(
    //   'Angular 2',
    //   'http://angular.io',
    //   10);
  }

  voteUp():boolean{
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean{
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {
      
  }

}
