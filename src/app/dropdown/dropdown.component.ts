import { Component, EventEmitter, Output } from '@angular/core';
import { SelectionComponent } from '../selection/selection.component';
import { GraphComponent } from '../graph/graph.component';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  standalone:true,
  imports:[GraphComponent,SelectionComponent]
})
export class DropDownComponent {
  citySelected: string | null = null;
  @Output() city = new EventEmitter<string>();
  @Output() branch = new EventEmitter<string>();
  @Output() dateRange = new EventEmitter<string>();
  emitCity(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.citySelected = value;
    this.city.emit(value);
  }
  emitBranch(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.branch.emit(value);
  }
  emitDateRange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.dateRange.emit(value);
  }
}