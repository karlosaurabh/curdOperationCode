import { Component, OnInit } from '@angular/core';

//IMPORTING TOASTR
import { ToastrService } from 'ngx-toastr';

//IMPORTING ROUTER
import {Router, ActivatedRoute} from '@angular/router';


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
    public ActivatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    
      this.toastr.success('Create Article!', 'Welcome!');
    
      
  }//ngonInit

  //THIS CODE IS FOR CREATE ARTICLE START
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
  }//THIS CODE IS FOR CREATE ARTICLE ENND

  //THIS CODE IS FOR EDIT ARTICLE START




  public editArticle():any {
    // let articleData = {
    //   title: this.articleTitle,
    //   description: this.articleDescription,
    //   blogBody: this.articleBlogBody,
    //   category: this.articleCategory
    // }
    //console.log(articleData);
  
   let getCurrentArticle= this.ActivatedRoute.snapshot.paramMap.get("getArticleId");
console.log("for edit" + getCurrentArticle)
    this.ArticleService.editArticle(getCurrentArticle,getCurrentArticle).subscribe(
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
  }//THIS CODE IS FOR CREATE ARTICLE ENND

}
