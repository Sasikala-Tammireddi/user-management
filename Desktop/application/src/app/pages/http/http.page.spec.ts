import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HttpPage } from './http.page';

describe('HttpPage', () => {
  let component: HttpPage;
  let fixture: ComponentFixture<HttpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HttpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
