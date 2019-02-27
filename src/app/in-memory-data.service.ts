import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable, OnInit } from "@angular/core";
import { Episode } from "./classes/episode";
import { Observable, ReplaySubject, Subscriber, Subscription } from "rxjs";
import { EpisodesComponent } from "./episodes/episodes.component";
import { UserInfo } from "./classes/userInfo";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MatCheckboxBase } from "@angular/material";

// const httpOptions = {
//   headers: new HttpHeaders({ "Content-Type": "application/json" })
// };

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements OnInit {
  private currentEpisode = new ReplaySubject<Episode[]>();
  private userInfo = new ReplaySubject<UserInfo>();

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  public getTest() {
    let test = this.http.get(
      "http://wwwgooddaydaughertycom-env.spf3x32mna.us-east-1.elasticbeanstalk.com/podcasts"
    );
    return test;
  }

  public updateSubscription(episodes: Episode[]): Observable<void> {
    return Observable.create((observer: Subscriber<void>) => {
      const newEpisodes: Episode[] = episodes;
      this.currentEpisode.next(newEpisodes);
      observer.next();
    });
  }
  public getEpisode(): Observable<any> {
    return this.http.get(
      "http://wwwgooddaydaughertycom-env.spf3x32mna.us-east-1.elasticbeanstalk.com/episodes"
    );
  }
  public getVideo(id: String): Observable<any> {
    let temp = this.http.get(
      `http://wwwgooddaydaughertycom-env.spf3x32mna.us-east-1.elasticbeanstalk.com/episode/${id}/video`
    );
    console.log(temp);
    return temp;
  }
  public getAudio(id: String): Observable<any> {
    let temp = this.http.get(
      `http://wwwgooddaydaughertycom-env.spf3x32mna.us-east-1.elasticbeanstalk.com/episode/${id}/audio`
    );
    console.log(temp);
    return temp;
  }
  public getTranscript(id: String): Observable<any> {
    let temp = this.http.get(
      `http://wwwgooddaydaughertycom-env.spf3x32mna.us-east-1.elasticbeanstalk.com/episode/${id}/transcript`
    );
    console.log(temp);
    return temp;
  }

  public setUserInfo(userInfo: UserInfo): Observable<UserInfo> {
    console.log("Setting User Info");
    return Observable.create((observer: Subscriber<void>) => {
      const newUser: UserInfo = userInfo;
      this.userInfo.next(newUser);
      // storing user info (in splash.component.ts - login()):
      localStorage.setItem("businessUnit", newUser.businessUnit);
      localStorage.setItem("lineOfService", newUser.lineOfService);
      const temp: string = newUser.isAdmin ? "true" : "false";
      console.log;
      localStorage.setItem("isAdmin", temp);

      observer.next();
    });
  }
  public getUserInfo(): Observable<UserInfo> {
    // recovering stored user data (in in-memory-data.service.ts - getUserInfo()):
    if (
      localStorage.getItem("businessUnit") &&
      localStorage.getItem("lineOfService")
    ) {
      const newUser: UserInfo = new UserInfo();
      newUser.businessUnit = localStorage.getItem("businessUnit");
      newUser.lineOfService = localStorage.getItem("lineOfService");
      const temp = localStorage.getItem("isAdmin");
      if (temp == "true") {
        newUser.isAdmin = true;
      } else {
        newUser.isAdmin = false;
      }
      this.userInfo.next(newUser);
    }
    return this.userInfo.asObservable();
  }
}
