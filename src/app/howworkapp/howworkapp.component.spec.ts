import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowworkappComponent } from './howworkapp.component';

describe('HowworkappComponent', () => {
  let component: HowworkappComponent;
  let fixture: ComponentFixture<HowworkappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowworkappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowworkappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
