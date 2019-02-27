import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { InMemoryDataService } from "../in-memory-data.service";
import { ActivatedRoute } from "@angular/router";
import { Episode } from "../classes/episode";
import { Location } from "@angular/common";

@Component({
  selector: "app-content-video",
  templateUrl: "./content-video.component.html",
  styleUrls: ["./content-video.component.css"]
})
export class ContentVideoComponent implements OnInit {
  private episodeSubscription: Subscription;
  private videoSubscription: Subscription;

  episodesArray: Episode[];
  episode: Episode = new Episode();
  videoLink: String = "";

  constructor(
    private route: ActivatedRoute,
    private dataService: InMemoryDataService // private location: Location
  ) {}

  ngOnInit(): void {
    this.getSpecificEpisode();
    console.log("Test");
  }

  ngOnDestroy(): void {
    this.episodeSubscription && this.episodeSubscription.unsubscribe();
    this.videoSubscription && this.videoSubscription.unsubscribe();
  }

  getSpecificEpisode(): void {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);

    this.episodeSubscription = this.dataService
      .getEpisode()
      .subscribe(episodes => {
        this.episodesArray = episodes["Episode"];
        console.log(this.episodesArray);
        this.episode = this.episodesArray.find(
          episode => episode.Episode_ID.toString() === id
        );
        this.videoSubscription = this.dataService
          .getVideo(this.episode.Episode_ID.toString())
          .subscribe(a => {
            console.log("Fetching videoLink");
            this.videoLink = a;
            console.log(a);
          });
      });

    // this.videoSubscription = this.dataService
    //   .getVideo(id)
    //   .subscribe((videoLink: String) => {
    //     this.videoLink = videoLink;
    //   });
  }
}
