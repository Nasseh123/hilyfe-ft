import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HlSubmitbtnGreenComponent } from './hl-submitbtn-green.component';

describe('HlSubmitbtnGreenComponent', () => {
  let component: HlSubmitbtnGreenComponent;
  let fixture: ComponentFixture<HlSubmitbtnGreenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HlSubmitbtnGreenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HlSubmitbtnGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
