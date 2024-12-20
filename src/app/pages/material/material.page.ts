import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonModal } from '@ionic/angular';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-material',
  templateUrl: './material.page.html',
  styleUrls: ['./material.page.scss'],
})
export class MaterialPage {
  @ViewChild('customerModal') customerModal!: IonModal;

  displayedColumns: string[] = ['id', 'name', 'email', 'action'];
  dataSource = new MatTableDataSource([
    { id: 1, name: 'Adem Demir', email: 'adem.demir@example.com' },
    { id: 2, name: 'innova', email: 'innova@example.com' },
  ]);

  searchText = '';
  selectedCustomer: any = { id: null, name: '', email: '' };
  editingCustomer = false;

  constructor(public translateService: TranslateService) {}

  setSearch(): void {
    const filterValue = this.searchText.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openCustomerModal(customer: any = null): void {
    this.editingCustomer = !!customer;
    this.selectedCustomer = customer ? { ...customer } : { id: null, name: '', email: '' };
    this.customerModal.present();
  }


  closeCustomerModal(): void {
    this.customerModal.dismiss();
  }

  saveCustomer(): void {
    if (this.editingCustomer) {
      const index = this.dataSource.data.findIndex((c) => c.id === this.selectedCustomer.id);
      if (index !== -1) {
        this.dataSource.data[index] = { ...this.selectedCustomer };
      }
    } else {
      const newId = this.dataSource.data.length + 1;
      this.dataSource.data.push({ id: newId, ...this.selectedCustomer });
    }
    this.dataSource._updateChangeSubscription();
    this.closeCustomerModal();
  }


  editCustomer(customer: any): void {
    this.openCustomerModal(customer);
  }

  deleteCustomer(id: number): void {
    this.dataSource.data = this.dataSource.data.filter((c) => c.id !== id);
    this.dataSource._updateChangeSubscription();
  }
}
