import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDetailComponent } from './input-detail.component';

describe('InputDetailComponent', () => {
  let component: InputDetailComponent;
  let fixture: ComponentFixture<InputDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputDetailComponent]
    });
    fixture = TestBed.createComponent(InputDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
