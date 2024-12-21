import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebDataRocksExamplePage } from './web-data-rocks-example.page';

describe('WebDataRocksExamplePage', () => {
  let component: WebDataRocksExamplePage;
  let fixture: ComponentFixture<WebDataRocksExamplePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDataRocksExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
