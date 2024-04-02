import { ComponentFixture, TestBed } from '@angular/core/testing';
import { A04Page } from './a04.page';

describe('A04Page', () => {
  let component: A04Page;
  let fixture: ComponentFixture<A04Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(A04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
