import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SqliteModelPage } from './sqlite-model.page';

describe('SqliteModelPage', () => {
  let component: SqliteModelPage;
  let fixture: ComponentFixture<SqliteModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqliteModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SqliteModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
