import { Component, OnInit } from "@angular/core";
import { UserInfo } from "../classes/userInfo";
import { Subscribable, Subscription } from "rxjs";
import { InMemoryBackendConfig } from "angular-in-memory-web-api";
import { InMemoryDataService } from "../in-memory-data.service";
import { Episode } from "../classes/episode";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.scss"]
})
export class HeaderComponent implements OnInit {
  userInfo: UserInfo = new UserInfo();

  userSubscription: Subscription;
  dataService: InMemoryDataService;
  testSubscription: Subscription;

  constructor(dataService: InMemoryDataService) {
    this.dataService = dataService;
    this.userInfo.isAdmin = false;
  }
  ngOnInit() {
    this.userSubscription = this.dataService
      .getUserInfo()
      .subscribe((userInfo: UserInfo) => {
        this.userInfo = userInfo;
      });
  }

  logout() {
    this.userInfo.isAdmin = false;
    this.dataService
      .setUserInfo(this.userInfo)
      .subscribe(null, (error: string) => {
        console.log("failed to add episode", undefined, {
          duration: 3000,
          verticalPosition: "top"
        });
      });
  }

  // checkUser() {
  //   console.log(this.userInfo);
  // }
}
