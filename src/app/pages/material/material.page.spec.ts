import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialPage } from './material.page';

describe('MaterialPage', () => {
  let component: MaterialPage;
  let fixture: ComponentFixture<MaterialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
