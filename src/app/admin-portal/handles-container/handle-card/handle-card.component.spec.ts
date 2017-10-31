import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleCardComponent } from './handle-card.component';

describe('HandleCardComponent', () => {
  let component: HandleCardComponent;
  let fixture: ComponentFixture<HandleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
