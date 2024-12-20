import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements AfterViewInit {
  personnelChart: Chart | null = null;
  customerChart: Chart | null = null;
  salesChart: Chart | null = null;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createPersonnelChart();
      this.createCustomerChart();
      this.createSalesChart();
    }, 0);
  }

  private getPersonnelData() {
    return [
      { label: 'Manager', data: 10 },
      { label: 'Engineer', data: 20 },
      { label: 'Technician', data: 15 },
      { label: 'HR', data: 5 },
    ];
  }

  private getCustomerData() {
    return [
      { label: 'New', data: 50 },
      { label: 'Returning', data: 30 },
      { label: 'VIP', data: 20 },
    ];
  }

  private getSalesData() {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      data: [5000, 7000, 4000, 9000, 6000, 8000],
    };
  }

  private getSpecificColor(index: number, opacity: number): string {
    const colors = [
      `rgba(75, 192, 192, ${opacity})`,
      `rgba(255, 99, 132, ${opacity})`,
      `rgba(255, 206, 86, ${opacity})`,
      `rgba(54, 162, 235, ${opacity})`,
    ];
    return colors[index % colors.length];
  }

  createPersonnelChart() {
    const res = this.getPersonnelData();
    const labels = res.map((d) => d.label);
    const data = res.map((d) => d.data);
    const backgroundColor = data.map((_, index) => this.getSpecificColor(index, 0.2));
    const borderColor = data.map((_, index) => this.getSpecificColor(index, 1));

    if (this.personnelChart) {
      this.personnelChart.destroy();
    }

    this.personnelChart = new Chart('PersonnelChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
      },
    });
  }

  createCustomerChart() {
    const res = this.getCustomerData();
    const labels = res.map((d) => d.label);
    const data = res.map((d) => d.data);
    const backgroundColor = data.map((_, index) => this.getSpecificColor(index, 0.2));

    if (this.customerChart) {
      this.customerChart.destroy();
    }

    this.customerChart = new Chart('CustomerChart', {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: backgroundColor,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
      },
    });
  }

  createSalesChart() {
    const res = this.getSalesData();

    if (this.salesChart) {
      this.salesChart.destroy();
    }

    this.salesChart = new Chart('SalesChart', {
      type: 'line',
      data: {
        labels: res.labels,
        datasets: [
          {
            label: 'Sales',
            data: res.data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
      },
    });
  }
}
