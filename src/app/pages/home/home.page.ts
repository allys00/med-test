import { Component } from '@angular/core';
import { QuestionsStats } from 'src/app/models/utils.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  grades: QuestionsStats[] = [{
    id: 1,
    name: 'grade 1 ',
    qtd_questions: 100,
    right: 50,
    error: 20,
    unfulfilled: 30
  }, {
    id: 2,
    name: 'grade 2 ',
    qtd_questions: 120,
    right: 10,
    error: 20,
    unfulfilled: 90
  }]

  constructor() { }

}
