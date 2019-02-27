import { Component, OnInit, OnDestroy } from "@angular/core";
import { Episode } from "../classes/episode";
import { InMemoryDataService } from "../in-memory-data.service";
import { Observable, Subscription } from "rxjs";
import { UserInfo } from "../classes/userInfo";

@Component({
  selector: "app-episode-list",
  templateUrl: "./episode-list.component.html",
  styleUrls: ["./episode-list.component.css", "./episode-list.scss"]
})
export class EpisodeListComponent implements OnInit, OnDestroy {
  title = "";
  public episodes: Episode[] = [];
  userInfo: UserInfo = new UserInfo();
  private readonly dataService: InMemoryDataService;
  private episodeSubscription: Subscription;
  private userSubscription: Subscription;

  constructor(dataService: InMemoryDataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
    this.episodeSubscription = this.dataService.getEpisode().subscribe(a => {
      this.episodes = a["Episode"];
      console.log(this.episodes);
    });
    this.userSubscription = this.dataService
      .getUserInfo()
      .subscribe((userInfo: UserInfo) => {
        this.userInfo = userInfo;
      });
    console.log(this.userInfo);
  }

  ngOnDestroy(): void {
    this.episodeSubscription.unsubscribe();
  }
}
