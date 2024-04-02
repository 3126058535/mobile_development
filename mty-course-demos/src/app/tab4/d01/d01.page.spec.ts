import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D01Page } from './d01.page';

describe('D01Page', () => {
  let component: D01Page;
  let fixture: ComponentFixture<D01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(D01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
