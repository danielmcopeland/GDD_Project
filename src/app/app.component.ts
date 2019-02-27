import { Component, OnInit, OnDestroy } from "@angular/core";
import { Episode } from "./classes/episode";
import { InMemoryDataService } from "./in-memory-data.service";
import { Observable, Subscription } from "rxjs";
import { UserInfo } from "./classes/userInfo";
import { EditEpisodeService } from './edit-episode.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  userInfo: UserInfo;

  title = "Good Day Daugherty Podcast Homepage";
  //in real life, this would come from the database, via the server
  episodes: Episode[];

  private readonly dataService: InMemoryDataService;
  private episodeSubscription: Subscription;
  private addEpisodeSubscription: Subscription;
  private userSubscription: Subscription;
  private editingEpisodeSubscription: Subscription;
  private isEditing: Boolean;

  NavButton = document.getElementById("nav-link");

  constructor(dataService: InMemoryDataService, private editService: EditEpisodeService, private http: HttpClient) {

    this.dataService = dataService;
  }

  ngOnInit() {
    this.updateSubscription(this.episodes);
    this.episodeSubscription = this.dataService
      .getEpisode()
      .subscribe((episodes: Episode[]) => {
        this.episodes = episodes;
      });
    this.userSubscription = this.dataService
      .getUserInfo()
      .subscribe((userInfo: UserInfo) => {
        this.userInfo = userInfo;
      });

    this.editingEpisodeSubscription = this.editService.checkIfEditing().subscribe(a => {
      this.isEditing = a;
    });
  }

  ngOnDestroy() {
    this.episodeSubscription.unsubscribe();
    this.addEpisodeSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  public updateSubscription(epi: Episode[]): void {
    this.addEpisodeSubscription = this.dataService
      .updateSubscription(epi)
      .subscribe(null, (error: string) => {
        console.log("failed to add episode", undefined, {
          duration: 3000,
          verticalPosition: "top"
        });
      });
  }
}
