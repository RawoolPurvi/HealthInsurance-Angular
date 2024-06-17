import { Component,Output,EventEmitter } from '@angular/core';
import { GraphComponent } from '../graph/graph.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [GraphComponent,FormsModule],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css'
})
export class SelectionComponent {
  city: string[] = ['California', 'New York', 'Washington D.C.']; 
  branches: string[] = ['Los Angeles','San Francisco','San Diego','Manhattan','Brooklyn','Queens','George Town','Shaw','Penn Quater'];
  selectedCity: string | undefined;
  selectedBranch: string | undefined;

  @Output() citySelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() branchSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onCountryChange(country: string) {
    this.selectedCity = country;
    this.citySelected.emit(country);
    this.updateBranches(country);
  }

  onBranchChange(branch: string) {
    this.selectedBranch = branch;
    this.branchSelected.emit(branch);
  }

  private updateBranches(city: string) {
    switch (city) {
      case 'California':
        this.branches = ['Los Angeles', 'San Francisco', 'San Diego'];
        break;
      case 'New York':
        this.branches = ['Manhattan', 'Brooklyn', 'Queens'];
        break;
      case 'Washington D.C.':
        this.branches = ['George Town', 'Shaw', 'Penn Quater'];
        break;
      default:
        this.branches = [];
        break;
    }
  }
}


