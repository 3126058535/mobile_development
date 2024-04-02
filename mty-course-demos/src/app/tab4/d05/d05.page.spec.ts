import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { D05Page } from './d05.page';

describe('D05Page', () => {
  let component: D05Page;
  let fixture: ComponentFixture<D05Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(D05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
