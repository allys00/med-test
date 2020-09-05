import { Component } from '@angular/core';
import { QuestionsStats } from 'src/app/models/utils.model';
import { ModalController } from '@ionic/angular';
import { CreateGradePage } from '../create-grade/create-grade.page';

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
  constructor(public modalController: ModalController) {
  }

  async openCreateGrade() {
    const modal = await this.modalController.create({
      component: CreateGradePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
