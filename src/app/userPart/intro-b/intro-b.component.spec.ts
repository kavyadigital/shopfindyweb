import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroBComponent } from './intro-b.component';

describe('IntroBComponent', () => {
  let component: IntroBComponent;
  let fixture: ComponentFixture<IntroBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
