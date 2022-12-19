import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  constructor() { }

  @Input() text!: string;
  @Input() toggled?: boolean;
  @Input() alt?: string;
    
  @Output() onClick = new EventEmitter();
  

  clickHandler() {
    this.onClick.emit();
  }
}
