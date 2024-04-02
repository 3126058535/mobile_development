import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B03Page } from './b03.page';

describe('B03Page', () => {
  let component: B03Page;
  let fixture: ComponentFixture<B03Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
