import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() changeDisplay = new EventEmitter<string>();

  toogleDisplay(value: string) {
    this.changeDisplay.emit(value);
  }
}
