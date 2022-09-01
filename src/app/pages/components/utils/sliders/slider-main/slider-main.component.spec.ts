import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderMainComponent } from './slider-main.component';

describe('SliderMainComponent', () => {
  let component: SliderMainComponent;
  let fixture: ComponentFixture<SliderMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderMainComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
