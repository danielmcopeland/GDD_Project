import { Component, OnInit } from "@angular/core";
import { Episode } from "../classes/episode";
import { InMemoryDataService } from "../in-memory-data.service";
import { Observable, Subscription } from "rxjs";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-add-episode",
  templateUrl: "./add-episode.component.html",
  styleUrls: ["./add-episode.component.css"]
})
export class AddEpisodeComponent implements OnInit {
  private readonly dataService: InMemoryDataService;

  private episodeSubscription: Subscription;
  private addEpisodeSubscription: Subscription;

  public episodes: Episode[];
  public newEpisode: Episode = new Episode();

  constructor(dataService: InMemoryDataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
    this.episodeSubscription = this.dataService
      .getEpisode()
      .subscribe((episodes: Episode[]) => {
        this.episodes = episodes;
      });
    console.log(this.episodes);
  }

  ngOnDestroy(): void {
    this.episodeSubscription.unsubscribe();
    this.addEpisodeSubscription && this.addEpisodeSubscription.unsubscribe();
  }

  public updateSubscription(epi: Episode[]): void {
    this.addEpisodeSubscription = this.dataService
      .updateSubscription(epi)
      .subscribe(null, (error: string) => {
        console.log("failed to add episode", undefined, {
          duration: 3000,
          verticalPoistion: "top"
        });
      });
  }
  public addNewEpisode() {
    if (this.newEpisode.Title && this.newEpisode.Description) {
      //THIS IS A PROBLEM!!

      this.episodes.unshift(this.newEpisode);
      this.updateSubscription(this.episodes);
    } else {
      alert("All fields required");
      console.log("All fields required!");
    }
  }
}
