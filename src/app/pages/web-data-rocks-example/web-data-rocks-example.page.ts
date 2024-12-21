import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { WebdatarocksComponent } from 'ng-webdatarocks';
import { C_Utils } from 'src/providers/utils';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-web-data-rocks-example',
  templateUrl: './web-data-rocks-example.page.html',
  styleUrls: ['./web-data-rocks-example.page.scss'],
})
export class WebDataRocksExamplePage implements OnInit {

  view: any = 'day';
  viewDate = new Date();
  dataList: any[] = [];
  baslangicZamani: any = moment(new Date(), 'MM/YYYY').format();
  @ViewChild('pivot1', { static: false }) child!: WebdatarocksComponent;
  
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public translate: TranslateService,
    public c_utils: C_Utils,
    public http: HttpClient,
    public loadingController: LoadingController,
  ) {}

  ngOnInit() {
    console.log('[ready] WebdatarocksPivotModule', this.child);
    this.menuCtrl.enable(true);
  }

  setView(view: any) {
    if (view) {
      this.view = view;
    }
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  onPivotReady(pivot: WebDataRocks.Pivot): void {
    console.log('[ready] WebdatarocksPivotModule', this.child);
  }

  onCustomizeCell(
    cell: WebDataRocks.CellBuilder,
    data: WebDataRocks.CellData,
    cond: WebDataRocks.ConditionalFormat
  ): void {
    try {
      const measure = data.measure as { uniqueName: string } | undefined;

      if (measure?.uniqueName === 'maliIsler') {
        const cellValue = parseInt(cell.text || '0', 10);
        if (cellValue < 1) {
          const style = cell.style as { [key: string]: string };
          style['font-weight'] = 'bold';
          style['color'] = 'red';
        }
      }
    } catch (error) {
      console.error('Error customizing cell:', error);
    }
  }

  tamEkranGoster() {
    try {
      const tet: any = document.getElementById('wdr-tab-fullscreen')?.lastElementChild;
      tet?.click();
    } catch (error) {
      console.error('Error showing fullscreen:', error);
    }
  }

  visibleToolbar() {
    try {
      const toolbarElements = [
        'wdr-tab-format',
        'wdr-tab-save',
        'wdr-tab-options',
        'wdr-tab-connect',
        'wdr-tab-open',
        'wdr-tab-fields'
      ];

      toolbarElements.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          element.remove();
        }
      });

      const fullscreenElement = document.getElementById('wdr-tab-fullscreen');
      if (fullscreenElement) {
        fullscreenElement.style.visibility = 'visible';
      }
    } catch (error) {
      console.error('Error customizing toolbar:', error);
    }
  }

  onReportComplete(): void {
    this.dataList = [
      {
        siraNo: '1',
        birimAdi: 'Dahiliye',
        toplamHastaSayisi: 14,
        mhrsliHastaSayisi: 7,
        goruntuluRandevuVerilen: 15,
        goruntuluGorusmeYapilan: 10,
        oran: (15 * 10) / 100
      },
      {
        siraNo: 2,
        birimAdi: 'Evde Sağlık',
        toplamHastaSayisi: 70,
        mhrsliHastaSayisi: 34,
        goruntuluRandevuVerilen: 40,
        goruntuluGorusmeYapilan: 20,
        oran: (40 * 20) / 100
      }
    ];

    if (this.child) {
      this.child.toolbar = false;
      this.child.webDataRocks.off('reportcomplete');
      this.child.webDataRocks.setReport({
        localization: './assets/i18n/tr.json',
        dataSource: {
          data: this.dataList
        },
        slice: {
          rows: [
            { caption: 'Sıra No', uniqueName: 'siraNo' },
            { caption: 'BİRİMLER', uniqueName: 'birimAdi' },
            { caption: 'Toplam Hasta Sayısı', uniqueName: 'toplamHastaSayisi' },
            { caption: "MHRS'li Hasta Sayısı", uniqueName: 'mhrsliHastaSayisi' },
            { caption: 'Görüntülü Randevu Verilen', uniqueName: 'goruntuluRandevuVerilen' },
            { caption: 'Görüntülü Görüşme Yapılan', uniqueName: 'goruntuluGorusmeYapilan' }
          ],
          measures: [
            {
              uniqueName: 'oran',
              aggregation: 'sum',
              caption: 'ORAN'
            }
          ]
        },
        options: {
          grid: {
            type: 'classic'
          },
          showAggregations: false,
          drillThrough: false,
          showAggregationLabels: false
        }
      });

      setTimeout(() => {
        this.visibleToolbar();
      }, 100);
    }
  }
}