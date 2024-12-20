import { Component, ViewChild, ElementRef } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: false,
})
export class CameraPage {

  capturedImage: string | null = null;

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  constructor(private platform: Platform, private camera: Camera) {}

  handleAction() {
    if (this.platform.is('android')) {
      this.openCamera();
    } else {
      this.openFilePicker();
    }
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.capturedImage = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        console.error('Camera error:', err);
      }
    );
  }

  openFilePicker() {
    this.fileInput.nativeElement.click();
  }

  handleFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.capturedImage = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
