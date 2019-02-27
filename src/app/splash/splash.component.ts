import { Component, OnInit } from "@angular/core";
import { InMemoryDataService } from "../in-memory-data.service";
import { UserInfo } from "../classes/userInfo";
import { Subscription } from "rxjs";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.scss"]
})
export class SplashComponent implements OnInit {
  userInfo: UserInfo = new UserInfo();

  private readonly dataService: InMemoryDataService;
  private userSubscription: Subscription;

  constructor(dataService: InMemoryDataService) {
    this.dataService = dataService;
  }

  ngOnInit() {}

  login() {
    if (this.userInfo.businessUnit && this.userInfo.lineOfService) {
      this.userSubscription = this.dataService
        .setUserInfo(this.userInfo)
        .subscribe(null, (error: string) => {
          console.log("failed to add episode", undefined, {
            duration: 3000,
            verticalPosition: "top"
          });
        });
    }
    //need to add console log in case of failure
  }
}
