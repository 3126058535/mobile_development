import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C01Page } from './c01.page';

describe('C01Page', () => {
  let component: C01Page;
  let fixture: ComponentFixture<C01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(C01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
