import { Component } from '@angular/core';
import { OpenAiService } from 'src/providers/service/openai.service';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.page.html',
  styleUrls: ['./chat-gpt.page.scss'],
})
export class ChatGPTPage {

  userInput: string = '';
  chatHistory: { role: string; content: string }[] = [];

  constructor(private openAiService: OpenAiService) {}

  sendMessage() {
    if (this.userInput.trim() === '') return;

    const userMessage = { role: 'user', content: this.userInput };
    this.chatHistory.push(userMessage);

    this.openAiService.sendMessage(this.userInput).subscribe({
      next: (response: any) => {
        const botMessage = {
          role: 'bot',
          content: response.choices[0].message.content,
        };
        this.chatHistory.push(botMessage);
      },
      error: (err: any) => {
        const errorMessage = { role: 'bot', content: 'Error: Unable to fetch response.' };
        this.chatHistory.push(errorMessage);
        console.error(err);
      },
    });

    this.userInput = '';
  }
}
