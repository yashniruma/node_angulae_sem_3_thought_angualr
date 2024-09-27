import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllthoughtComponent } from './allthought.component';

describe('AllthoughtComponent', () => {
  let component: AllthoughtComponent;
  let fixture: ComponentFixture<AllthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllthoughtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
