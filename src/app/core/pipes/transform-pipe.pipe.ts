import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformPipe'
})
export class TransformPipePipe implements PipeTransform {

  transform=(object: any =[])=> {
    return Object.values(object);
  }
   
}
