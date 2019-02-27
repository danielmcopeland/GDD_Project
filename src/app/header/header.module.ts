import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material";
import { RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./header.component";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HeaderComponent],
  imports: [FlexLayoutModule, MatButtonModule, RouterModule, NgbModule, CommonModule, BrowserModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
