import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteaccountComponent } from './completeaccount.component';

describe('CompleteaccountComponent', () => {
  let component: CompleteaccountComponent;
  let fixture: ComponentFixture<CompleteaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
