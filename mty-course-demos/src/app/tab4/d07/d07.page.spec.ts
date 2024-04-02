import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D07Page } from './d07.page';

describe('D07Page', () => {
  let component: D07Page;
  let fixture: ComponentFixture<D07Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(D07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
