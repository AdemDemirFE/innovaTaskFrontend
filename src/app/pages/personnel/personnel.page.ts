import { Component } from '@angular/core';
import { il as citiesData } from 'src/models/il';
import { ilce as districtsData } from 'src/models/ilce';
import { mahalle as neighborhoodsData } from 'src/models/mahalle';
import { AlertController } from '@ionic/angular';
import { AlertService } from 'src/providers/generalServices/AlertService';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.page.html',
  styleUrls: ['./personnel.page.scss'],
  standalone: false,
})
export class PersonnelPage {
personnel = [
  { id: 1, name: 'Elon Musk', position: 'CEO', note: 'Visionary leader', isActive: true, city: 'Los Angeles', district: 'Silicon Valley', neighborhood: 'Tech Park' },
  { id: 2, name: 'Polat Alemdar', position: 'Field Agent', note: 'Underground operations expert', isActive: true, city: 'Istanbul', district: 'Beyoglu', neighborhood: 'Taksim' },
  { id: 3, name: 'Abuzer Kömürcü', position: 'Businessman', note: 'Owner of coal mines', isActive: false, city: 'Zonguldak', district: 'Kilimli', neighborhood: 'Kömür Mahallesi' },
  { id: 4, name: 'Kara', position: 'Bodyguard', note: 'Silent protector', isActive: true, city: 'Ankara', district: 'Çankaya', neighborhood: 'Yıldız' },
  { id: 5, name: 'Tony Stark', position: 'Inventor', note: 'Billionaire philanthropist', isActive: true, city: 'New York', district: 'Manhattan', neighborhood: 'Stark Tower' },
];

  cities = citiesData;
  districts: Array<any> = [];
  neighborhoods: Array<any> = [];

  selectedCity: any = null;
  selectedDistrict: any = null;
  selectedNeighborhood: any = null;

  newPerson: { 
    id: number; 
    name: string; 
    position: string; 
    note: string; 
    isActive: boolean; 
    city: string; 
    district: string; 
    neighborhood: string 
  } = {
    id: 0,
    name: '',
    position: '',
    note: '',
    isActive: true,
    city: '',
    district: '',
    neighborhood: '',
  };
  editNew = '';

  constructor(private alertController: AlertController, public alertService: AlertService) {}

  addEdit(action: string, person: any): void {
    this.editNew = action;
    if (person) {
      this.newPerson = { ...person };
    } else {
      this.newPerson = { id: 0, name: '', position: '', note: '', isActive: true, city: '', district: '', neighborhood: '' };
    }
    this.resetSelections();
    const modal: any = document.querySelector('ion-modal');
    modal.present();
  }

  cancel(): void {
    const modal: any = document.querySelector('ion-modal');
    modal.dismiss();
  }

  saveOrEdit(): void {
    if (!this.newPerson.name || !this.newPerson.position || !this.selectedCity || !this.selectedDistrict || !this.selectedNeighborhood) {
      this.alertService.presentAlert('ERROR.ERROR', 'ERROR.ALL_FIELDS_REQUIRED');
      return;
    }
  
    this.assignLocationDetails();
  
    if (this.editNew === 'Edit') {
      const index = this.personnel.findIndex((p) => p.id === this.newPerson.id);
      if (index !== -1) {
        this.personnel[index] = { ...this.newPerson };
      }
    } else {
      const newId = this.personnel.length > 0 ? Math.max(...this.personnel.map((p) => p.id || 0)) + 1 : 1;
      this.newPerson.id = newId;
      this.personnel.push({ ...this.newPerson });
    }
      this.cancel();
  }
    private assignLocationDetails(): void {
    this.newPerson.city = this.selectedCity.sehir_title;
    this.newPerson.district = this.selectedDistrict.ilce_title;
    this.newPerson.neighborhood = this.selectedNeighborhood.mahalle_title;
  }
  async deleteAlert(person: any): Promise<void> {
    await this.alertService.presentConfirm(
      'GENERAL.CONFIRM_TITLE',
      `GENERAL.DELETE_CONFIRM ${person.name}?`,
      () => {
        this.personnel = this.personnel.filter((p) => p !== person);
      }
    );
  }

  loadDistricts(): void {
    if (this.selectedCity) {
      this.districts = districtsData.filter(district => district.ilce_sehirkey === this.selectedCity.sehir_key);
      this.resetNeighborhoods();
    }
  }

  loadNeighborhoods(): void {
    if (this.selectedDistrict) {
      this.neighborhoods = neighborhoodsData.filter(neighborhood => neighborhood.mahalle_ilcekey === this.selectedDistrict.ilce_key);
      this.selectedNeighborhood = null;
    }
  }

  private resetSelections(): void {
    this.selectedCity = null;
    this.selectedDistrict = null;
    this.selectedNeighborhood = null;
    this.districts = [];
    this.neighborhoods = [];
  }

  private resetNeighborhoods(): void {
    this.selectedDistrict = null;
    this.selectedNeighborhood = null;
    this.neighborhoods = [];
  }
}
