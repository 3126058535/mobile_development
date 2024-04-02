import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D04Page } from './d04.page';

describe('D04Page', () => {
  let component: D04Page;
  let fixture: ComponentFixture<D04Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(D04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
