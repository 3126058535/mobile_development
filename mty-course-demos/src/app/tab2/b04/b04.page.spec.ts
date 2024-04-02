import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B04Page } from './b04.page';

describe('B04Page', () => {
  let component: B04Page;
  let fixture: ComponentFixture<B04Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
