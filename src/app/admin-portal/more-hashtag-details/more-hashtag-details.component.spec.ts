import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreHashtagDetailsComponent } from './more-hashtag-details.component';

describe('MoreHashtagDetailsComponent', () => {
  let component: MoreHashtagDetailsComponent;
  let fixture: ComponentFixture<MoreHashtagDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreHashtagDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreHashtagDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
