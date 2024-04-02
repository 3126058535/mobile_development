import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B01Page } from './b01.page';

describe('B01Page', () => {
  let component: B01Page;
  let fixture: ComponentFixture<B01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
