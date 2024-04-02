import { ComponentFixture, TestBed } from '@angular/core/testing';
import { A01Page } from './a01.page';

describe('A01Page', () => {
  let component: A01Page;
  let fixture: ComponentFixture<A01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(A01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
