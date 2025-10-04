import { Component, ElementRef, inject, input, ViewEncapsulation, contentChild } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // with using of this one folded stules become global and could work properly in this component part
  host: {
    class: 'control', // adding class to the host component in template
    '(click)': 'onClick()',
  }
})
export class ControlComponent {
  // @HostBinding('class') className = "control"; // option for giving class name using host binding
 /*  @HostListener('click') onClick() {  ----> more old option of using listener host binding
    console.log('Clicked!')
  } */
  label = input.required<string>();
  private el = inject(ElementRef);
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTemplateElement>>('input');
/*   @ContentChild('input') private control: ElementRef <HTMLInputElement | HTMLTemplateElement>; */

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }
}
