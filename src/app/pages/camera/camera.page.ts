import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: false,
})
export class CameraPage implements OnInit {

  capturedImage: string | null = null;

  constructor(private camera: Camera) {}

  ngOnInit () {

  }
  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData: any) => {
        this.capturedImage = 'data:image/jpeg;base64,' + imageData;
      },
      (err: any) => {
        console.error('Camera issue:', err);
      }
    );
  }

}
