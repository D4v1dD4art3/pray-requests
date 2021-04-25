import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerRequestsFormComponent } from './prayer-requests-form.component';

describe('PrayerRequestsFormComponent', () => {
  let component: PrayerRequestsFormComponent;
  let fixture: ComponentFixture<PrayerRequestsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerRequestsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerRequestsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
