import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './componantes/nav-bar/nav-bar.component';
import { HomeComponent } from './componantes/home/home.component';
import { FooterComponent } from './componantes/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './componantes/search/search.component';


@NgModule({
  declarations: [
   // NavBarComponent,
    //HomeComponent,
   // FooterComponent
  
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ]
})
export class SharedModule { }
