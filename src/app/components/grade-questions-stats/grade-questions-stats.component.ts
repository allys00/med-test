import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Chart } from "chart.js";
import { QuestionsStats } from 'src/app/models/utils.model';

@Component({
  selector: 'app-grade-questions-stats',
  templateUrl: './grade-questions-stats.component.html',
  styleUrls: ['./grade-questions-stats.component.scss'],
})
export class GradeQuestionsStatsComponent implements OnInit {
  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;
  @Input() questionsStats: QuestionsStats;
  private doughnutChart: Chart;

  labels = [
    {
      name: 'Acertos',
      color: '#22d275',
      key: 'right'
    },
    {
      name: 'Erros',
      color: '#ff5c5f',
      key: 'error'
    },
    {
      name: 'Não Realizados',
      color: '#6a6a6a',
      key: 'unfulfilled'
    },
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: "doughnut",
        data: {
          datasets: [
            {
              borderWidth: 0,
              label: "# of Votes",
              data: this.labels.map(item => this.questionsStats[item.key]),
              backgroundColor: this.labels.map(item => item.color),

            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          }
        },

      });
    }, 500);
  }

}
