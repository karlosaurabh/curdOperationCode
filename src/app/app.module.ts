import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//IMPORTING TOASTR
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CreateArticleComponent } from './create-article/create-article.component';



//IMPORTING ROUTER
import { Router, RouterModule } from '@angular/router';
import { AllArticleComponent } from './all-article/all-article.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './article.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ShareModuleComponent } from './share/share-module/share-module.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateArticleComponent,
    AllArticleComponent,
    ArticleDetailComponent,
    ShareModuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
      }
    ), // ToastrModule added
    RouterModule.forRoot([
      { path: '', redirectTo: 'createArticle', pathMatch: 'full' },
      { path: 'createArticle', component: CreateArticleComponent },
      { path: 'allArticle', component: AllArticleComponent },
      { path: 'articleDetail/:getArticleId', component: ArticleDetailComponent },
      { path: '**', component: CreateArticleComponent },
      { path: '*', component: CreateArticleComponent },
    ])
  ],
 
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
