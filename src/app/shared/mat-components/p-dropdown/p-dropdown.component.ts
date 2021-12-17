import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'p-dropdown',
  templateUrl: './p-dropdown.component.html'
})

export class PDropdownComponent {
  @Input() data: Array<any> = [];
  @Output() onSelection = new EventEmitter<string>();

  onChange({value}: MatSelectChange) {
    this.onSelection.emit(value);
  }
}
