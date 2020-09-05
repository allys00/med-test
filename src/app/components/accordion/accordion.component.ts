import { Component, OnInit, Input } from '@angular/core';
import { QuestionsStats } from 'src/app/models/utils.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})

export class AccordionComponent implements OnInit {
  @Input() grades: QuestionsStats & { isOpen: boolean }[]

  constructor() {

  }

  ngOnInit() {

  }

}
