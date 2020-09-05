import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuIsOpen = false;

  menus = [
    {
      title: 'Menu',
      buttons: [
        {
          icon: '../../../assets/icon/icon_newmain.svg',
          label: 'Main',
          onClick: () => {}
        },
        {
          icon: '../../../assets/icon/icon_newmedcode.svg',
          label: 'Medcode',
          onClick: () => {}
        },
        {
          icon: '../../../assets/icon/icon_newslideaula.svg',
          label: 'Slide de Aula',
          onClick: () => {}
        }, {
          icon: '../../../assets/icon/icon_newacademicas.svg',
          label: 'Dúvidas Acadêmicas',
          onClick: () => {}
        }
      ]
    },
    {
      title: 'Área de Treinamento',
      buttons: [
        {
          icon: '../../../assets/icon/icon_newsimu.svg',
          label: 'Simulados',
          onClick: () => {}
        },
        {
          icon: '../../../assets/icon/icon_newsimu.svg',
          label: 'Simulados R3 Cirurgia',
          onClick: () => {}
        },
        {
          icon: '../../../assets/icon/icon_newsimu.svg',
          label: 'Multimìdia CP-MED',
          onClick: () => {}
        }, {
          icon: '../../../assets/icon/icon_newintegra.svg',
          label: 'Concursos na íntegra',
          onClick: () => {}
        }, {
          icon: '../../../assets/icon/icon_newmonta.svg',
          label: 'Monta Provas',
          onClick: () => {}
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() { }

}
