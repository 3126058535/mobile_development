import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D09Page } from './d09.page';

describe('D09Page', () => {
  let component: D09Page;
  let fixture: ComponentFixture<D09Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(D09Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
