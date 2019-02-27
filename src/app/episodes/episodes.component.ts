import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { EditEpisodeService } from '../edit-episode.service';
import { UserInfo } from '../classes/userInfo';
import { Subscription } from 'rxjs';
import { InMemoryDataService } from '../in-memory-data.service';
declare let $: any;

@Component({
  selector: "app-episodes",
  templateUrl: "./episodes.component.html",
  styleUrls: ["./episodes.component.css", "./episodes.component.scss"]
})
export class EpisodesComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() name: string;
  @Input() summary: string;

  userInfo: UserInfo;
  private userSubscription: Subscription;
  private dataService: InMemoryDataService;
  isOpen: Boolean = false;

  constructor(private editService: EditEpisodeService, dataService: InMemoryDataService) {
    this.dataService = dataService;
  }

  ngOnInit() {
    this.userSubscription = this.dataService.getUserInfo().subscribe(a => {
      this.userInfo = a;
    });
  }

  ngOnDestroy() {
    this.userSubscription && this.userSubscription.unsubscribe();
  }

  makeEdit() {
    this.editService.editEpisode(this.id);

  }

  toggleOptions() {
    this.isOpen = !this.isOpen;
  }
}
