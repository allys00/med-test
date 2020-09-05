import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AccordionComponent } from 'src/app/components/accordion/accordion.component';
import { GradeQuestionsStatsComponent } from 'src/app/components/grade-questions-stats/grade-questions-stats.component';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, AccordionComponent, GradeQuestionsStatsComponent]
})
export class HomePageModule { }
