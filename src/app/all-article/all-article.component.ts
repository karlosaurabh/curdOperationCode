import { Component, OnInit, Input } from '@angular/core';
//IMPORTING TOASTR
import { ToastrService } from 'ngx-toastr';

//IMPORTING ROUTER
import {Router, ActivatedRoute} from '@angular/router';


import { ArticleService } from '../article.service';
@Component({
  selector: 'app-all-article',
  templateUrl: './all-article.component.html',
  styleUrls: ['./all-article.component.css']
})
export class AllArticleComponent implements OnInit {
  public allArticle;

  constructor(
    public router:Router,
    private toastr: ToastrService,
    public ArticleService:ArticleService,
    public ActivatedRoute:ActivatedRoute
  ) {
    console.log("Constructor of all article called");
  }

  ngOnInit() {
    console.log("onInit called article")
    console.log("all as");
    console.log(this.allArticle);
    this.ArticleService.getAllArticle().subscribe(
      (data) => {
        console.log(data);
       // data.map(allArticle =>{console.log(allArticle)});
        this.allArticle = data.data;
        console.log(this.allArticle);
    }
    , (error) => {
      console.log("Some error occur");
      this.toastr.error(error.message);
    }
   
     )
   
  }//ngOnInit end


}
