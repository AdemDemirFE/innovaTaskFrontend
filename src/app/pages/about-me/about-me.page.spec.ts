import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMePage } from './about-me.page';

describe('AboutMePage', () => {
  let component: AboutMePage;
  let fixture: ComponentFixture<AboutMePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
