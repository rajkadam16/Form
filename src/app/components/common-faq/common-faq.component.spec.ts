import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFaqComponent } from './common-faq.component';

describe('CommonFaqComponent', () => {
  let component: CommonFaqComponent;
  let fixture: ComponentFixture<CommonFaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonFaqComponent]
    });
    fixture = TestBed.createComponent(CommonFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
