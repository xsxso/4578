import { HttpClient } from "@angular/common/http";
import { Users } from "../models/users.model";
import { Injectable, Input } from "@angular/core";
import { AppComponent } from "../../app.component";

@Injectable()
export class UserRequestService {


 
  
  userData: { users: Users } = {
    users: undefined
  };
  
  constructor(private myHttp: HttpClient) {
    this.myHttp.get("https://reqres.in/api/users?page")
    .subscribe(
    (response:Users)=>{this.userData.users=response}
      )
    };

    showByPageNumber(selectedPage: number) {

      this.myHttp.get("https://reqres.in/api/users?page="+ selectedPage)
      .subscribe(
      (response:Users)=>{this.userData.users=response}
        )
      };
};
    // this.myHttp.get("https://reqres.in/api/users?page=2")
    //  .subscribe(
    //     (response:Users)=>{console.log(response.page)});

    // this.myHttp.get("https://reqres.in/api/users?page=3")
    //  .subscribe(
    //     (response:Users)=>{console.log(response.page)});

    // this.myHttp.get("https://reqres.in/api/users?page=4")
    //     .subscribe(
    //        (response:Users)=>{console.log(response.page)});
   

    //     //enter the data that's received back into a variable called response 
    //     //that's of the type Users
    // );
 

    // (response:Users)=>{this.userData2.users.page=response.page;}
    
    //enter the data that's received back into a variable called response 
    //that's of the type Users



/*
.get is a function of HttpClient. 
HttpClient is class that instantiates within the constructor.
In this case, we named this instance myHttp.
Once the .get request fires off, an instance of a class called Observable is made in the background.
When a reponse is received, we use Observable's subscribe method to execute a function.
The function we execute implements the Users interface, meaning it creates an instance of Users. 
It then proceeds to populate Users with the repsonse data received. 
*/
