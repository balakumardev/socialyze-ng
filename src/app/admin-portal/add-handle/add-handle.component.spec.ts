import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHandleComponent } from './add-handle.component';

describe('AddHandleComponent', () => {
  let component: AddHandleComponent;
  let fixture: ComponentFixture<AddHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
