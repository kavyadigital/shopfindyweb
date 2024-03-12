import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsreleaseComponent } from './newsrelease.component';

describe('NewsreleaseComponent', () => {
  let component: NewsreleaseComponent;
  let fixture: ComponentFixture<NewsreleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsreleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
