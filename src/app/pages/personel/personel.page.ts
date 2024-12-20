import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-personel',
  templateUrl: './personel.page.html',
  styleUrls: ['./personel.page.scss'],
  standalone: false,
})
export class PersonelPage {
  personnel = [
    { id: 1, name: 'Ahmet Yılmaz', position: 'Yazılım Geliştirici', note: 'Backend uzmanı', isActive: true },
    { id: 2, name: 'Ayşe Demir', position: 'Analist', note: 'İş analisti', isActive: false },
  ];

  newPerson = {
    id: -1,
    name: '',
    position: '',
    note: '',
    isActive: true,
  };

  editNew = '';
  isManager = true; // Yönetici olup olmadığı

  constructor(private translate: TranslateService) {}

  applyFilter() {
    console.log('Filter applied');
  }

  addEdit(action: string, person: any) {
    this.editNew = action;
    if (person) {
      this.newPerson = { ...person };
    } else {
      this.newPerson = {
        id: -1,
        name: '',
        position: '',
        note: '',
        isActive: true,
      };
    }
    const modal: any = document.querySelector('ion-modal');
    modal.present();
  }

  cancel() {
    const modal: any = document.querySelector('ion-modal');
    modal.dismiss();
  }

  saveOrEdit(id: number, event: any) {
    if (id === -1) {
      const newId = this.personnel.length + 1;
      this.personnel.push({ ...this.newPerson, id: newId });
    } else {
      const index = this.personnel.findIndex((person) => person.id === id);
      if (index !== -1) {
        this.personnel[index] = { ...this.newPerson };
      }
    }
    this.cancel();
  }

  deleteAlert(person: any) {
    if (confirm(this.translate.instant('GENERAL.DELETE_CONFIRM'))) {
      this.personnel = this.personnel.filter((item) => item.id !== person.id);
    }
  }

  handleRefresh(event: any) {
    console.log('Refreshing data...');
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
}
