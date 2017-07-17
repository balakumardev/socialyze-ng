import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHashtagComponent } from './add-hashtag.component';

describe('AddHashtagComponent', () => {
  let component: AddHashtagComponent;
  let fixture: ComponentFixture<AddHashtagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHashtagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHashtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
