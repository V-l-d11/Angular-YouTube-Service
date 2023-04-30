import { Directive , ElementRef} from '@angular/core';



@Directive({
  selector: '[appColorDirect]'
})
export class ColorDirectDirective {

  constructor(private el: ElementRef) {
 
   }

}
