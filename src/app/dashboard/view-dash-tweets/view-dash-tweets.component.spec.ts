import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDashTweetsComponent } from './view-dash-tweets.component';

describe('ViewDashTweetsComponent', () => {
  let component: ViewDashTweetsComponent;
  let fixture: ComponentFixture<ViewDashTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDashTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDashTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
