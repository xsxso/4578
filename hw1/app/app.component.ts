import { Component } from "@angular/core";
import { UserRequestService } from "./shared/services/user-request.service";
import { Users } from "./shared/models/users.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  selectedPage: number;
 
  // private Service: UserRequestService;
  localData: { users: Users };  //this variable will house the data that's received from user-request.service.ts
  constructor(private myService: UserRequestService) {
    this.localData = this.myService.userData;
    //use the userData method of myService
    }

  selectPage (event: any) {
      this.selectedPage = event.target.value;
      this.myService.showByPageNumber(this.selectedPage);
      }
  }
