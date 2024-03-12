import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteaccountbusinessComponent } from './completeaccountbusiness.component';

describe('CompleteaccountbusinessComponent', () => {
  let component: CompleteaccountbusinessComponent;
  let fixture: ComponentFixture<CompleteaccountbusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteaccountbusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteaccountbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
