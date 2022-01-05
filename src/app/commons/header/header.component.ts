import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { StyleManagerService } from './style-manager.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav!: MatSidenav;
  @Output() onSearchText = new EventEmitter<string>();
  search: string = '';
  options = [
    {
      label: 'Deep Purple & Amber',
      value: 'deeppurple-amber'
    },
    {
      label: 'Indigo & Pink',
      value: 'indigo-pink'
    },
    {
      label: 'Pink & Blue Grey',
      value: 'pink-bluegrey'
    },
    {
      label: 'Purple & Green',
      value: 'purple-green'
    },
  ]

  constructor(private themeService: StyleManagerService) {}
  
  ngOnInit(): void {
    this.themeService.setStyle('Deep Purple & Amber');
  }

  onSearch(data:string):void {
    this.onSearchText.emit(data);
  }

  themeChangeHandler(theme: string): void {
    this.themeService.setStyle(theme);
  }
}
