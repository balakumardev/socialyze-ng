import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHashtagsComponent } from './admin-hashtags.component';

describe('AdminHashtagsComponent', () => {
  let component: AdminHashtagsComponent;
  let fixture: ComponentFixture<AdminHashtagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHashtagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHashtagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
