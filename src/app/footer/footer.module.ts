import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FooterComponent } from "./footer.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [FooterComponent],
  imports: [MatButtonModule, FlexLayoutModule, RouterModule],
  exports: [FooterComponent]
})
export class FooterModule {}
