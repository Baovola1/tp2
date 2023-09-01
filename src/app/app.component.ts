import { Component,OnInit } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';
import { HttpserviceService } from './httpservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'tp2';
  articles:Article[] = [];

  updateOne: boolean = false;
  selectedArticle: Article = new Article("dummy","link");
  
 

  constructor(private service:HttpserviceService){}

  //Récupération des données dans le httpservice 
    ngOnInit(): void {
      this.service.getArticles().subscribe(restArticles=>this.articles= restArticles);
    }

    // addArticle(title:HTMLInputElement, link:HTMLInputElement) {
    //   console.log(`Adding article title:${title.value} and link: ${link.value}`);
    //   this.articles.push(new Article(title.value, link.value,0));
    //   title.value=""
    //   link.value=""
    //   return false;
    //   }

    //Post
    addArticle(title:HTMLInputElement, link:HTMLInputElement){
      console.log(`input ${title.value}`);
       this.service.addArticle(new Article(title.value, link.value)).subscribe(data=>{this.getArticles()});
      // location.reload();
     return false;
    }
    
 
    //delete
    deleteArticle(id:number){
      console.log("bjr");
      
         this.service.deleteArticle(id).subscribe(data=> {
         this.getArticles()
          
         })
        return false;  
    }

      sortedArticles(): Article[]{
        return this.articles.sort((a: Article, b: Article)=>b.votes - a.votes);
      }

      getArticles (){
          this.service.getArticles().subscribe(restArticles=>this.articles= restArticles);
      }
     
}


