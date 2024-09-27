import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYmhtComponent } from './add-ymht.component';

describe('AddYmhtComponent', () => {
  let component: AddYmhtComponent;
  let fixture: ComponentFixture<AddYmhtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddYmhtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddYmhtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
