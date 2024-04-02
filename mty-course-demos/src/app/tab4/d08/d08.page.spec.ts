import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D08Page } from './d08.page';

describe('D08Page', () => {
  let component: D08Page;
  let fixture: ComponentFixture<D08Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(D08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
