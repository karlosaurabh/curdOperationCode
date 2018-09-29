import { Component, OnInit } from '@angular/core';

//IMPORTING TOASTR
import { ToastrService } from 'ngx-toastr';

//IMPORTING ROUTER
import {Router} from '@angular/router';


import { ArticleService } from '../article.service';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  public articleTitle:string;
  public articleDescription:string;
  public articleBlogBody:string;
  public articleCategory:string;
  public bp=["Comedy", "Drama" , "Action", "Technologies"];

  constructor(
    public router:Router,
    private toastr: ToastrService,
    public ArticleService:ArticleService,
  ) { }

  ngOnInit() {
    
      this.toastr.success('Create Article!', 'Welcome!');
    
      
  }//ngonInit

  public createArticle():any {
    let articleData = {
      title: this.articleTitle,
      description: this.articleDescription,
      blogBody: this.articleBlogBody,
      category: this.articleCategory
    }
    console.log(articleData);
    this.ArticleService.createArticle(articleData).subscribe(
      data=>{
          //console.log("Blog Created");
          console.log(data);
          this.toastr.success('Blog posted successfully Success');

          setTimeout(()=>{
            this.router.navigate(['/articleDetail',data.data.blogId]);
          },1000)
      },

      error=>{
        console.log("Some error Occured");
          console.log(error.errorMessage);
          this.toastr.error('Some error Occured Error');
      }
    )
  }

}
