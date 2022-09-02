import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartPokeComponent } from './chart-poke.component';

describe('ChartPokeComponent', () => {
  let component: ChartPokeComponent;
  let fixture: ComponentFixture<ChartPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartPokeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
