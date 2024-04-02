import { ComponentFixture, TestBed } from '@angular/core/testing';
import { A03Page } from './a03.page';

describe('A03Page', () => {
  let component: A03Page;
  let fixture: ComponentFixture<A03Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(A03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
