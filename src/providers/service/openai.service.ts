import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = 'AKI KEY BURAYA YAZILACAK'; // OpenAI API anahtarınızı buraya yapıştırın.

  constructor(private http: HttpClient) {}

  sendMessage(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      model: 'gpt-3.5-turbo', // veya 'gpt-4'
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
