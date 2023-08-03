import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompomentComponent } from './form-compoment.component';

describe('FormCompomentComponent', () => {
  let component: FormCompomentComponent;
  let fixture: ComponentFixture<FormCompomentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCompomentComponent]
    });
    fixture = TestBed.createComponent(FormCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
