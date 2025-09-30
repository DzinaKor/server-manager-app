import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // with using of this one folded stules become global and could work properly in this component part
  host: {
    class: 'control' // adding class to the host component in template
  }
})
export class ControlComponent {
label = input.required<string>()
}
