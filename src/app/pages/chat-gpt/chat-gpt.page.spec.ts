import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatGPTPage } from './chat-gpt.page';

describe('ChatGPTPage', () => {
  let component: ChatGPTPage;
  let fixture: ComponentFixture<ChatGPTPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGPTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
