import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  @Input() sidenav!: MatSidenav;
  @Output() onSearchText = new EventEmitter<string>();
  search: string = '';

  onSearch(data:string):void {
    this.onSearchText.emit(data);
  }
}
