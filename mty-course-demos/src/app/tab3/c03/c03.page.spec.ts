import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C03Page } from './c03.page';

describe('C03Page', () => {
  let component: C03Page;
  let fixture: ComponentFixture<C03Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(C03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
