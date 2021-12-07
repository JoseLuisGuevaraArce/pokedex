import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'p-input-text',
  templateUrl: './p-input-text.component.html',
  styleUrls: ['./p-input-text.component.less']
})
export class PInputTextComponent implements OnInit {

  search: string = '';
  @Output() onChangeSearch = new EventEmitter<string>();
  @Input() label:string = '';
  @Input() placeholder:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(text:string):void {
    this.onChangeSearch.emit(text);
  }

}
