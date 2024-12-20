import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
  standalone: false,
})
export class BarcodePage {

  scannedData: BarcodeScanResult | null = null;
  barcodeValue: string = 'https://innova.com.tr';

  constructor(private barcodeScanner: BarcodeScanner) {}

  startScan() {
    this.barcodeScanner.scan().then(
      (barcodeData) => {
        if (!barcodeData.cancelled) {
          this.scannedData = barcodeData;
        }
      },
      (err) => {
        console.error('Error scanning barcode:', err);
      }
    );
  }
}
