import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonelPage } from './personel.page';

describe('PersonelPage', () => {
  let component: PersonelPage;
  let fixture: ComponentFixture<PersonelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
