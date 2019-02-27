import { Component, OnInit } from '@angular/core';
import { EditEpisodeService } from '../edit-episode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-splash',
  templateUrl: './edit-splash.component.html',
  styleUrls: ['./edit-splash.component.css', './edit-splash.scss']
})
export class EditSplashComponent implements OnInit {
  private episodeIdSubscription: Subscription;
  private episodeId: string;

  constructor(private editService: EditEpisodeService) { }

  ngOnInit() {

    this.episodeIdSubscription = this.editService.checkEpisodeId().subscribe(a => {
      this.episodeId = a;
      console.log(this.episodeId);
    })


  }

  closeSplash() {
    this.editService.doneEditing();
  }

}
