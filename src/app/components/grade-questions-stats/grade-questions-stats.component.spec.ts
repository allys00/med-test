import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradeQuestionsStatsComponent } from './grade-questions-stats.component';

describe('GradeQuestionsStatsComponent', () => {
  let component: GradeQuestionsStatsComponent;
  let fixture: ComponentFixture<GradeQuestionsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeQuestionsStatsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradeQuestionsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
