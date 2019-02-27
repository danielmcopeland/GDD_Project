import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatSnackBarModule, MatIconModule } from "@angular/material";
import { AdminLoginComponent } from './admin-login.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';



@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports: [AdminLoginComponent]
})
export class AdminLoginModule { }
