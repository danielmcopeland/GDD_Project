import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

import { AppComponent } from "./app.component";
import { EpisodesComponent } from "./episodes/episodes.component";
import { HeaderModule } from "./header/header.module";
import { FooterModule } from "./footer/footer.module";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { EpisodeListComponent } from "./episode-list/episode-list.component";
import { AddEpisodeComponent } from "./add-episode/add-episode.component";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SplashComponent } from "./splash/splash.component";
import { ContentAudioComponent } from "./content-audio/content-audio.component";
import { ContentVideoComponent } from "./content-video/content-video.component";
import { ContentTranscriptComponent } from "./content-transcript/content-transcript.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { ViewDataComponent } from "./view-data/view-data.component";
import { SafePipe } from "./safe-pipe.pipe";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollComponentComponent } from './scroll-component/scroll-component.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { EditSplashComponent } from './edit-splash/edit-splash.component';


@NgModule({
  declarations: [
    AppComponent,
    EpisodesComponent,
    EpisodeListComponent,
    AddEpisodeComponent,
    SplashComponent,
    ContentAudioComponent,
    ContentVideoComponent,
    ContentTranscriptComponent,
    AdminLoginComponent,
    ViewDataComponent,
    SafePipe,
    ScrollComponentComponent,
    EditSplashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ScrollingModule
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //   dataEncapsulation: false
    // })
  ],
  providers: [InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
