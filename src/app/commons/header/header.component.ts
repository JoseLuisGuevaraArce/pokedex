import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  @Input() sidenav: any;
  @Output() onSearchText = new EventEmitter<string>();
  search: string = '';

  onSearch(data:string):void {
    this.onSearchText.emit(data);
  }

}
