import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = "https://blogapp.edwisor.com/api/v1/blogs/";
  public myApi = 'ZmZmOGU4ODBiMzQ0N2JhOGQ3ZDEwZjkxNDZmNmE0MDdjMWNmMDQxOWFjMmQ0ZWUyZmE1YTBhZDY5NTkwZGQzNWIwNTAxNjYzMDg3MjVhOWEyZjE5YzY1MDMxZGY3YzM0NjZmNTlkZTliOTViYWJmY2Q0NjA3MGE1OTE4YWM0MjI5NA';
  // http://103.27.87.30:8080/mywebservice/user/article?id=2
  constructor(
    private http:HttpClient,
  ) { 
    console.log("service constructor called");
  }// constructor

  getAllArticle:any = ()=>{
    return(this.http.get(this.baseUrl + 'all?authToken=' + this.myApi));
  }

  getArticleInformation:any = (getCurrentArticleId) =>{
    console.log(getCurrentArticleId)
    return(this.http.get(this.baseUrl +"view/" + getCurrentArticleId + '?authToken=' + this.myApi));
  }


  //DELETE CODE START FROM HERE
  deleteArticle:any = (getArticleId)=>{
    return(this.http.post(this.baseUrl + getArticleId +"/delete" + '?authToken=' + this.myApi,getArticleId));
  }


  //CREATE CODE START FROM HERE
  createArticle:any = (getArticleId)=>{
    return(this.http.post(this.baseUrl + "create/" + '?authToken=' + this.myApi,getArticleId));
  }




  editThisArticle:any = (getArticleId, currentBlog)=>{
    return(this.http.put(this.baseUrl + getArticleId + "/edit" + '?authToken=' + this.myApi,currentBlog));
    console.log("service edit working");
  }



 //https://blogapp.edwisor.com/api/v1/blogs/:blogId/delete

  //Create article
  // createArticle(article: Article):Observable<number> {
  //   let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  //     let options = new RequestOptions({ headers: cpHeaders });
  //     return this.http.post(this.articleUrl, article, options)
  //            .pipe(map(success => success.status))
  //            .pipe(catchError(this.handleError));
  // }

}
