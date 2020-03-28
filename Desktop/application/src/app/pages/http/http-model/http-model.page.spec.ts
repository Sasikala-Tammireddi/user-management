import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HttpModelPage } from './http-model.page';

describe('HttpModelPage', () => {
  let component: HttpModelPage;
  let fixture: ComponentFixture<HttpModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HttpModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
