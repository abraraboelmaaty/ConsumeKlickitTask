import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './componantes/nav-bar/nav-bar.component';
import { HomeComponent } from './componantes/home/home.component';
import { FooterComponent } from './componantes/footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   // NavBarComponent,
    //HomeComponent,
   // FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ]
})
export class SharedModule { }
