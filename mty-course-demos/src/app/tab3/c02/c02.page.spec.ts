import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C02Page } from './c02.page';

describe('C02Page', () => {
  let component: C02Page;
  let fixture: ComponentFixture<C02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(C02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
