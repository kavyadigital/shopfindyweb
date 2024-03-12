import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharmeComponent } from './sharme.component';

describe('SharmeComponent', () => {
  let component: SharmeComponent;
  let fixture: ComponentFixture<SharmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
