import { Injectable, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subscriber } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditEpisodeService implements OnInit {

  private isEditing = new ReplaySubject<Boolean>();
  private episodeId = new ReplaySubject<string>();

  ngOnInit() {
    this.isEditing.next(false);

  }

  checkEpisodeId(): Observable<string> {
    return this.episodeId.asObservable();
  }

  checkIfEditing(): Observable<Boolean> {
    return this.isEditing.asObservable();
  }

  editEpisode(id: string) {
    this.isEditing.next(true);
    this.episodeId.next(id);
  }

  doneEditing() {
    this.isEditing.next(false);
  }

}
