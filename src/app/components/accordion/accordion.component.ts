import { Component, OnInit, Input } from '@angular/core';
import { QuestionsStats } from 'src/app/models/utils.model';
import { PopoverController } from '@ionic/angular';
import { AccordionMenuComponent } from './accordion-menu/accordion-menu.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})

export class AccordionComponent implements OnInit {
  @Input() grades: QuestionsStats & { isOpen: boolean }[]

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {

  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AccordionMenuComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}

