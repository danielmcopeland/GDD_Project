import { Component, OnInit } from "@angular/core";
import { Episode } from "../classes/episode";
import { ActivatedRoute } from "@angular/router";
import { InMemoryDataService } from "../in-memory-data.service";
import { Subscription } from "rxjs";
import { Location } from "@angular/common";

@Component({
  selector: "app-content-transcript",
  templateUrl: "./content-transcript.component.html",
  styleUrls: ["./content-transcript.component.css"]
})
export class ContentTranscriptComponent implements OnInit {
  private episodeSubscription: Subscription;
  private transcriptSubscription: Subscription;

  episodesArray: Episode[];
  episode: Episode = new Episode();
  textLink: String = "";

  constructor(
    private route: ActivatedRoute,
    private dataService: InMemoryDataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTranscript();
    console.log(this.episode);
  }

  ngOnDestroy(): void {
    this.episodeSubscription && this.episodeSubscription.unsubscribe();
    this.transcriptSubscription && this.transcriptSubscription.unsubscribe();
  }

  getTranscript(): void {
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
        this.transcriptSubscription = this.dataService
          .getTranscript(this.episode.Episode_ID.toString())
          .subscribe(a => {
            console.log("Fetching videoLink");
            this.textLink = a;
            console.log(a);
          });
      });

    // this.transcriptSubscription = this.dataService
    //   .getAudio(id)
    //   .subscribe((transcriptLink: String) => {
    //     this.transcriptLink = transcriptLink;
    //   });
  }
}
