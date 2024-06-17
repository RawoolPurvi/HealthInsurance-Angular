import { Component,Input,OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { DropDownComponent } from '../dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
Chart.register(...registerables);
@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [CommonModule,DropDownComponent],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnInit{
  @Input() data: any[] = []; // Data for graph display
  ngOnInit() {
    this.renderGraph();
  }
  renderGraph() {
    // const transactionsData = this.data.map(item => item.transactions.length);  Commented this for hardcoding
    const quarterlyCustomerData = [
      { category: 'Gold', customers: 100 },
      { category: 'Exclusive', customers: 150 },
      { category: 'Premium', customers: 150 },
      // Add more data as needed
    ];
    const categories = quarterlyCustomerData.map(entry => entry.category);
    const customers = quarterlyCustomerData.map(entry => entry.customers);//Till here added new
    new Chart('piechart', {
      type: 'bar',
      data: {
        labels: ['Gold', 'Exclusive', 'Premium'],
        datasets: [{
          label: 'Number of Transactions',
          data: customers,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
            }
          }
        }
      });
       // Render the second graph
    const mediclaimData = this.data.map(item => item.mediclaimVolume);
    const lifeInsuranceData = this.data.map(item => item.lifeInsuranceVolume);
    new Chart('comparisonChart', {
      type: 'bar',
      data: {
        labels: ['Mediclaim','LIC'],
        // labels: this.data.map(item => item.branch),
        datasets: [
          {
            label: 'Mediclaim Volume',
            data: mediclaimData,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'Life Insurance Volume',
            data: lifeInsuranceData,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}