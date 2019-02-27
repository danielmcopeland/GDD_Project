import { Component, OnInit, OnDestroy } from "@angular/core";
import { Episode } from "../classes/episode";
import { ActivatedRoute } from "@angular/router";
import { InMemoryDataService } from "../in-memory-data.service";
import { Location } from "@angular/common";
import { Subscription } from "rxjs";

@Component({
  selector: "app-content-audio",
  templateUrl: "./content-audio.component.html",
  styleUrls: ["./content-audio.component.css"]
})
export class ContentAudioComponent implements OnInit, OnDestroy {
  private episodeSubscription: Subscription;
  private audioSubscription: Subscription;

  episodesArray: Episode[];
  episode: Episode = new Episode();
  audioLink: String = "";

  constructor(
    private route: ActivatedRoute,
    private dataService: InMemoryDataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAudio();
    console.log(this.episode);
  }

  ngOnDestroy(): void {
    this.episodeSubscription && this.episodeSubscription.unsubscribe();
    this.audioSubscription && this.audioSubscription.unsubscribe();
  }

  getAudio(): void {
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
        this.audioSubscription = this.dataService
          .getAudio(this.episode.Episode_ID.toString())
          .subscribe(a => {
            console.log("Fetching videoLink");
            this.audioLink = a;
            console.log(a);
          });
      });

    // this.audioSubscription = this.dataService
    //   .getAudio(id)
    //   .subscribe((videoLink: String) => {
    //     this.audioLink = audioLink;
    //   });
  }
}
