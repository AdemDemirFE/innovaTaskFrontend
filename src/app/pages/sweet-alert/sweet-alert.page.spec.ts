import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SweetAlertPage } from './sweet-alert.page';

describe('SweetAlertPage', () => {
  let component: SweetAlertPage;
  let fixture: ComponentFixture<SweetAlertPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
