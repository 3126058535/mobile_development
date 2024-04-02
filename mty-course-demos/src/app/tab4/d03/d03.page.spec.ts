import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D03Page } from './d03.page';

describe('D03Page', () => {
  let component: D03Page;
  let fixture: ComponentFixture<D03Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(D03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
