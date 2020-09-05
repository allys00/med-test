import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AccordionComponent } from 'src/app/components/accordion/accordion.component';
import { GradeQuestionsStatsComponent } from 'src/app/components/grade-questions-stats/grade-questions-stats.component';
import { AccordionMenuComponent } from 'src/app/components/accordion/accordion-menu/accordion-menu.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { CreateGradePage } from '../create-grade/create-grade.page';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, AccordionComponent, GradeQuestionsStatsComponent, AccordionMenuComponent, MenuComponent, CreateGradePage]
})
export class HomePageModule { }
