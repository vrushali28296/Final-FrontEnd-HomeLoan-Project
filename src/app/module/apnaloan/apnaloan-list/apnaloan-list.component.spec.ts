import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApnaloanListComponent } from './apnaloan-list.component';

describe('ApnaloanListComponent', () => {
  let component: ApnaloanListComponent;
  let fixture: ComponentFixture<ApnaloanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApnaloanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApnaloanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
