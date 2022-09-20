import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApnaloanDetailsComponent } from './apnaloan-details.component';

describe('ApnaloanDetailsComponent', () => {
  let component: ApnaloanDetailsComponent;
  let fixture: ComponentFixture<ApnaloanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApnaloanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApnaloanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
