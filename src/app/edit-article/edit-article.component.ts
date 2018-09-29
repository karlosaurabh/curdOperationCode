import { Component, OnInit } from '@angular/core';

//IMPORTING TOASTR
import { ToastrService } from 'ngx-toastr';

//IMPORTING ROUTER
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleService } from '../article.service';
import { NgModel } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  public currentBlog;
  public allBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technologies"];

  constructor(
    public router: Router,
    private toastr: ToastrService,
    public ArticleService: ArticleService,
    public ActivatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log("Edit onInit called");
    //getting the blog id from the route
    let getBlogId = this.ActivatedRoute.snapshot.paramMap.get('getArticleId');
    console.log(getBlogId);

    this.ArticleService.getArticleInformation(getBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data["data"];
        this.toastr.success('Blog opened successfully');
        console.log("this is edit blog" + this.currentBlog);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )

    console.log("blog OnInit  function called is here");




  }//ngoninit

  editThisArticle() {
    this.ArticleService.editThisArticle(this.currentBlog.blogId, this.currentBlog).subscribe(
      data => {
        console.log(data);
        this.toastr.success("Blog Edited succesfully Thank you");

        setTimeout(() => {
          this.router.navigate(['/create']);
        }, 1000);

        this.currentBlog = data["data"];
        // this.toastr.success('Blog opened successfully');
        console.log(this.currentBlog);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )//editThisBlog subscribe end here}



  }//editThisArticle

}