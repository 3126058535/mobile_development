import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D02Page } from './d02.page';

describe('D02Page', () => {
  let component: D02Page;
  let fixture: ComponentFixture<D02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(D02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
