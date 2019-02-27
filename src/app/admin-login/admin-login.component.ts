import { Component, OnInit } from "@angular/core";
import { Admin } from "../classes/admin";
import { Credentials } from "../classes/credentials";
import { UserInfo } from "../classes/userInfo";
import { InMemoryDataService } from "../in-memory-data.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"]
})
export class AdminLoginComponent implements OnInit {
  userInfo: UserInfo = new UserInfo();
  public loggedInUser: Admin;
  public credentials: Credentials = new Credentials();

  private router: Router;
  private readonly dataService: InMemoryDataService;
  private userSubscription: Subscription;

  constructor(dataService: InMemoryDataService, router: Router) {
    this.dataService = dataService;
    this.router = router;
  }

  ngOnInit() {
    this.userSubscription = this.dataService
      .getUserInfo()
      .subscribe((userInfo: UserInfo) => {
        this.userInfo = userInfo;
      });
    console.log(this.userInfo);
    console.log(this.userInfo.businessUnit);
    if (this.userInfo.businessUnit == undefined) {
      this.userInfo.businessUnit = "Saint Louis";
      this.userInfo.lineOfService = "Marcom";

      console.log(this.userInfo);
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
      console.log(this.userInfo);
    }
  }

  login(): void {
    console.log(this.userInfo);
    if (this.credentials.username && this.credentials.password) {
      // const user = new Admin();
      // user.username = this.credentials.username;
      // this.loggedInUser = user;
      this.userInfo.isAdmin = true;
      this.dataService
        .setUserInfo(this.userInfo)
        .subscribe(null, (error: string) => {
          console.log("failed to add episode", undefined, {
            duration: 3000,
            verticalPosition: "top"
          });
        });

      console.log(this.userInfo);
      this.router.navigate(["/"]);
    } else {
      console.log("NOPE YOU FOOL");
    }
  }
}
