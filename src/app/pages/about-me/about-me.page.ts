import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage {
  constructor(
    private inAppBrowser: InAppBrowser,
    private platform: Platform,
    private navController: NavController
  ) {}

  /**
   * Opens the provided URL based on platform.
   * @param url - The URL to be opened.
   */
  openUrl(url: string): void {
    const isAndroid = this.platform.is('android');
    const isIOS = this.platform.is('ios');
    const isBrowser = this.platform.is('mobileweb') || this.platform.is('desktop');

    // Check platform and open URL
    if (isAndroid || isIOS) {
      // Use InAppBrowser for mobile platforms
      this.openInAppBrowser(url, '_blank');
    } else if (isBrowser) {
      // Use standard browser window for desktop
      window.open(url, '_blank');
    } else {
      // Default fallback for unknown platforms
      this.openInAppBrowser(url, '_blank');
    }
  }

  /**
   * Opens a URL using InAppBrowser.
   * @param url - The URL to open.
   * @param target - The target for the InAppBrowser (e.g., '_blank').
   */
  private openInAppBrowser(url: string, target: string): void {
    const options = 'location=yes,closebuttoncaption=Close,closebuttoncolor=#FF2B08';
    this.inAppBrowser.create(url, target, options);
  }
}
