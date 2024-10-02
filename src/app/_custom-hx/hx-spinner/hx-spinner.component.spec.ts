import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HxSpinnerComponent } from './hx-spinner.component';

describe('HxSpinnerComponent', () => {
  let component: HxSpinnerComponent;
  let fixture: ComponentFixture<HxSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HxSpinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HxSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
