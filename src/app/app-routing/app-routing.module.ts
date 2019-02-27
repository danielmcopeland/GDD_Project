import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EpisodeListComponent } from "../episode-list/episode-list.component";
import { AddEpisodeComponent } from "../add-episode/add-episode.component";
import { ContentVideoComponent } from "../content-video/content-video.component";
import { ContentAudioComponent } from "../content-audio/content-audio.component";
import { ContentTranscriptComponent } from "../content-transcript/content-transcript.component";
import { AdminLoginComponent } from "../admin-login/admin-login.component";
import { ViewDataComponent } from "../view-data/view-data.component";

const routes: Routes = [
  { path: "", component: EpisodeListComponent },
  { path: "addEpisode", component: AddEpisodeComponent },
  { path: "video/:id", component: ContentVideoComponent },
  { path: "audio/:id", component: ContentAudioComponent },
  { path: "transcript/:id", component: ContentTranscriptComponent },
  { path: "adminLogin", component: AdminLoginComponent },
  { path: "viewData", component: ViewDataComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
