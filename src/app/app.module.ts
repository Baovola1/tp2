import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';

//Création route
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"article", component:ArticleComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //insertion route
    RouterModule.forRoot(routes)
  ],

  exports:[RouterModule],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
