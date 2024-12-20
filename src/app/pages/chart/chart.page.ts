import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements AfterViewInit {
  transportChart: Chart | null = null;
  organTransplantChart: Chart | null = null;
  defaultMonthCount = 6;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createTransportChart();
      this.createOrganTransplantChart();
    }, 0);
  }
  private getTransportData() {
    return [
      { label: 'Car', data: 120 },
      { label: 'Bike', data: 80 },
      { label: 'Bus', data: 150 },
      { label: 'Train', data: 200 },
    ];
  }

  private getOrganTransplantData() {
    return [
      { label: 'Heart', data: 50 },
      { label: 'Kidney', data: 70 },
      { label: 'Liver', data: 30 },
      { label: 'Lungs', data: 20 },
    ];
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

  createTransportChart() {
    const res = this.getTransportData();
    const labels = res.map((d) => d.label);
    const data = res.map((d) => d.data);
    const backgroundColor = data.map((_, index) => this.getSpecificColor(index, 0.2));
    const borderColor = data.map((_, index) => this.getSpecificColor(index, 1));

    if (this.transportChart) {
      this.transportChart.destroy();
    }

    this.transportChart = new Chart('TransportChart', {
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
        aspectRatio: 2.5,
        plugins: {
          legend: { display: false },
        },
      },
    });
  }

  createOrganTransplantChart() {
    const res = this.getOrganTransplantData();
    const labels = res.map((d) => d.label);
    const data = res.map((d) => d.data);
    const backgroundColor = data.map((_, index) => this.getSpecificColor(index, 0.2));
    const borderColor = data.map((_, index) => this.getSpecificColor(index, 1));

    if (this.organTransplantChart) {
      this.organTransplantChart.destroy();
    }

    this.organTransplantChart = new Chart('OrganTransplantChart', {
      type: 'pie',
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
        aspectRatio: 2.5,
        plugins: {
          legend: { display: this.defaultMonthCount <= 6 },
          tooltip: { enabled: true },
        },
      },
    });
  }
}
