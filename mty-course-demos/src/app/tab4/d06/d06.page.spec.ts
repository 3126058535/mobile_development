import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D06Page } from './d06.page';

describe('D06Page', () => {
  let component: D06Page;
  let fixture: ComponentFixture<D06Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(D06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
