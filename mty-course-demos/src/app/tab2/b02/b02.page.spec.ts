import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B02Page } from './b02.page';

describe('B02Page', () => {
  let component: B02Page;
  let fixture: ComponentFixture<B02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
