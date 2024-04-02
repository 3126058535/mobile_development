import { ComponentFixture, TestBed } from '@angular/core/testing';
import { A02Page } from './a02.page';

describe('A02Page', () => {
  let component: A02Page;
  let fixture: ComponentFixture<A02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(A02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
