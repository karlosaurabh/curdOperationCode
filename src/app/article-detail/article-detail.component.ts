import { Component, OnInit, Input, Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';
//IMPORTING TOASTR
import { ToastrService } from 'ngx-toastr';

//IMPORTING ROUTER
import {Router, ActivatedRoute} from '@angular/router';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit{

 // @Input() 
  public allArticle;
  public currentArticle;

  constructor(
    public router:Router,
    private toastr: ToastrService,
    public ArticleService:ArticleService,
    public ActivatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.ArticleService.getAllArticle().subscribe(
      (data) => {
        this.allArticle=data.data;
        //data.map(allArticle =>{console.log(allArticle)});
        console.log(this.allArticle);
       
      
    }
  )
    // this.ActivatedRoute.paramMap.subscribe(params=>{
    //   let getCurrentArticleIds = params.get("getArticleId");
    let getCurrentArticleIds = this.ActivatedRoute.snapshot.paramMap.get("getArticleId");
      console.log("hello");
      console.log(getCurrentArticleIds);

      this.ArticleService.getArticleInformation(getCurrentArticleIds).subscribe(
        (data)=>{
          console.log("sdfa"+data)
          this.currentArticle=data.data;
          console.log(this.currentArticle);
        }
      ),
      (error) => {
        console.log("some error occured");
        console.log(error.errorMessage);
       //this.router.navigate['(\allArticle)']
      }

     

    }//ngonInit end here


    deleteArticle(){
      //this.toastr.success('wellcome to Delete block ');
     console.log(this.currentArticle.title)
      this.ArticleService.deleteArticle(this.currentArticle.blogId).subscribe(
        (data)=>{
          let deleteData = data["data"];
          console.log(deleteData);
          this.toastr.success("This article is deleted successfully");
          setTimeout(()=>{
            this.router.navigate(['/createArticle']);
          }, 1000)
          
        },(error)=>{
          console.log("some error occur");
          console.log(error.errorMessage);
        }
      )//subscribe end here

    }//delete article




    

  //   ngOnChanges(changes:SimpleChanges){
  //     let data = changes.allArticle;

  //     this.allArticle = data.currentValue;
      
  //     console.log("ngOnChanges");
  //     console.log( this.allArticle);
  //      console.log("ngOnChanges");
  
  // }
   
  }

