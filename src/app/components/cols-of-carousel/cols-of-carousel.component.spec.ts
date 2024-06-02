import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColsOfCarouselComponent } from './cols-of-carousel.component';

describe('ColsOfCarouselComponent', () => {
  let component: ColsOfCarouselComponent;
  let fixture: ComponentFixture<ColsOfCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColsOfCarouselComponent]
    });
    fixture = TestBed.createComponent(ColsOfCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
