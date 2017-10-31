import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlesContainerComponent } from './handles-container.component';

describe('HandlesContainerComponent', () => {
  let component: HandlesContainerComponent;
  let fixture: ComponentFixture<HandlesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
