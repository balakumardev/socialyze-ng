import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagDetailsComponent } from './hashtag-details.component';

describe('HashtagDetailsComponent', () => {
  let component: HashtagDetailsComponent;
  let fixture: ComponentFixture<HashtagDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
