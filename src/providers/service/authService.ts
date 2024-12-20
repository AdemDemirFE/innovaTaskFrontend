import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
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

  /**
   * Oturum Açmış Kullanıcıyı Getir
   * @returns Mevcut kullanıcı
   */
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

  /**
   * Kullanıcı Bilgilerini Güncelle
   * @param displayName Yeni isim
   * @returns Güncellenmiş kullanıcı
   */
  async updateDisplayName(displayName: string): Promise<void> {
    const user = this.auth.currentUser;
    if (!user) throw new Error('No user is logged in');
    try {
      await updateProfile(user, { displayName });
      console.log('Display name updated:', displayName);
    } catch (error) {
      console.error('Error updating display name:', error);
      throw error;
    }
  }

  /**
   * Kullanıcı E-posta Güncelleme
   * @param email Yeni e-posta
   * @returns Güncellenmiş kullanıcı
   */
  async updateEmail(email: string): Promise<void> {
    const user = this.auth.currentUser;
    if (!user) throw new Error('No user is logged in');
    try {
      await updateEmail(user, email);
      console.log('Email updated:', email);
    } catch (error) {
      console.error('Error updating email:', error);
      throw error;
    }
  }

  /**
   * Kullanıcı Şifre Güncelleme
   * @param password Yeni şifre
   */
  async updatePassword(password: string): Promise<void> {
    const user = this.auth.currentUser;
    if (!user) throw new Error('No user is logged in');
    try {
      await updatePassword(user, password);
      console.log('Password updated');
    } catch (error) {
      console.error('Error updating password:', error);
      throw error;
    }
  }
}
