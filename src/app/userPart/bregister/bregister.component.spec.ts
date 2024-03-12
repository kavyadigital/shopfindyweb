import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BregisterComponent } from './bregister.component';

describe('BregisterComponent', () => {
  let component: BregisterComponent;
  let fixture: ComponentFixture<BregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
