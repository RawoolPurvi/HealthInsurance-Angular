import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
import { NgModel } from '@angular/forms';
import { DropDownComponent } from './dropdown/dropdown.component';
import { GraphComponent } from './graph/graph.component';
import { SelectionComponent } from './selection/selection.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone :true,
  imports : [DropDownComponent,CommonModule,SelectionComponent,GraphComponent]
})
export class AppComponent {
  title = 'HealthInsurance';
  filteredData: any[] = [];
  selectedCity: string | undefined;
  selectedBranch: string | undefined;
  selectedDateRange: string | undefined;

  constructor(private customerService: CustomerService) { }

  onCitySelected(city: string) {
    this.selectedCity = city;
    this.filterData();
  }

  onBranchSelected(branch: string) {
    this.selectedBranch = branch;
    this.filterData();
  }

  onDateRangeSelected(dateRange: string) {
    this.selectedDateRange = dateRange;
    this.filterData();
  }

  filterData() {
    // Filter data based on selected options
    if (this.selectedCity && this.selectedBranch && this.selectedDateRange) {
      this.filteredData = this.customerService.getFilteredCustomers(this.selectedCity, this.selectedBranch, this.selectedDateRange);
    }
  }
}
