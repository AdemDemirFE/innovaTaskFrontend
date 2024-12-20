import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonnelPage } from './personnel.page';

describe('PersonnelPage', () => {
  let component: PersonnelPage;
  let fixture: ComponentFixture<PersonnelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
