import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YmhtComponent } from './ymht.component';

describe('YmhtComponent', () => {
  let component: YmhtComponent;
  let fixture: ComponentFixture<YmhtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YmhtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YmhtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
