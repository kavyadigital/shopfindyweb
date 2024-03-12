import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterHomeComponent } from './login-register-home.component';

describe('LoginRegisterHomeComponent', () => {
  let component: LoginRegisterHomeComponent;
  let fixture: ComponentFixture<LoginRegisterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisterHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRegisterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
