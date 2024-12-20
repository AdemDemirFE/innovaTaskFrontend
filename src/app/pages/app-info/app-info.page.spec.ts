import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppInfoPage } from './app-info.page';

describe('AppInfoPage', () => {
  let component: AppInfoPage;
  let fixture: ComponentFixture<AppInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
