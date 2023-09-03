import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Article } from '../article';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article!: Article;
  updateMode = false;
  
  //partie pour le delete
  @Output()
  articleToDelete = new EventEmitter<number>();

  deleteArticle(article: Article){
    this.articleToDelete.emit(article.id);
  }

  //partie update
  @Output()
  selectedArticle = new EventEmitter<number>();

  constructor(private httpService:HttpserviceService){
   
  }
  
  beginUpdate(){
    this.updateMode = true;
  }

  //partie update
  saveArticle(){
    this.httpService.updateArticle(this.article).subscribe(()=>{
      this.updateMode=false;
    }) 
  }

  cancelArticle(){
    this.updateMode = false;
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
