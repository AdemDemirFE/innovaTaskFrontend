import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = getAuth(initializeApp(environment.firebaseConfig));

  /**
   * Kullanıcı Kaydı
   * @param email Kullanıcı e-posta adresi
   * @param password Kullanıcı şifresi
   * @returns Kullanıcı verisi veya hata mesajı
   */
  async register({ email, password }: { email: string; password: string }): Promise<User | null> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('User registered:', userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error('Register Error:', error);
      throw error;
    }
  }

  /**
   * Kullanıcı Girişi
   * @param email Kullanıcı e-posta adresi
   * @param password Kullanıcı şifresi
   * @returns Kullanıcı verisi veya hata mesajı
   */
  async login({ email, password }: { email: string; password: string }): Promise<User | null> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('User logged in:', userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error('Login Error:', error);
      throw error;
    }
  }

  getUser(): User | null {
    return this.auth.currentUser;
  }

  /**
   * Kullanıcı Çıkışı
   */
  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout Error:', error);
      throw error;
    }
  }
}