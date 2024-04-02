import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C04Page } from './c04.page';

describe('C04Page', () => {
  let component: C04Page;
  let fixture: ComponentFixture<C04Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(C04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
