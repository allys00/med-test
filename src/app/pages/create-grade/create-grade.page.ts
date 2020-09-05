import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuestionsStats } from 'src/app/models/utils.model';

@Component({
  selector: 'app-create-grade',
  templateUrl: './create-grade.page.html',
  styleUrls: ['./create-grade.page.scss'],
})
export class CreateGradePage implements OnInit {

  questions: QuestionsStats = {
    id: 1,
    error: 20,
    right: 50,
    unfulfilled: 30,
    qtd_questions: 100,
    name: "Nova Prova"
  }

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
