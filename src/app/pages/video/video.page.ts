import { Component, ViewChild, ElementRef } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { File } from '@ionic-native/file/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage {
  videoPath: string | null = null;

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  constructor(
    private mediaCapture: MediaCapture,
    private file: File,
    private androidPermissions: AndroidPermissions,
    private platform: Platform
  ) {}

  handleVideoCapture() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      this.checkPermissionsAndCapture();
    } else {
      this.openFilePicker();
    }
  }

  async checkPermissionsAndCapture() {
    const permissions = [
      this.androidPermissions.PERMISSION.CAMERA,
      this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
      this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
    ];

    for (const permission of permissions) {
      const result = await this.androidPermissions.checkPermission(permission);
      if (!result.hasPermission) {
        await this.androidPermissions.requestPermission(permission);
      }
    }

    this.captureVideo();
  }

  captureVideo() {

    const options: CaptureVideoOptions = { limit: 1, duration: 30 };
    this.mediaCapture.captureVideo(options).then(
      (result) => {
        if (Array.isArray(result)) {
          const capturedFile = result[0];
          const filePath = capturedFile.fullPath;
          const fileName = capturedFile.name;
  
          this.videoPath = this.file.externalDataDirectory + fileName;
        } else {
          console.error("Capture Error:", result);
        }
      },
      (err) => {
        console.error("Error capturing video:", err);
      }
    );
  }

  openFilePicker() {
    this.fileInput.nativeElement.click();
  }

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.videoPath = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
