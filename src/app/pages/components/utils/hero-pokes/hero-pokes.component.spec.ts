import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroPokesComponent } from './hero-pokes.component';

describe('HeroPokesComponent', () => {
  let component: HeroPokesComponent;
  let fixture: ComponentFixture<HeroPokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroPokesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroPokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
