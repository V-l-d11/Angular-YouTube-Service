import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../models/ItemTestM';

@Pipe({
  name: 'filterDate'
})
export class FilterDatePipe implements PipeTransform {

  transform(titleInput: Item[], isSort: boolean) {
    
    if (titleInput.length === 0 ) {
      return titleInput
    } else {
   
      
      if (isSort === true) {
       titleInput.sort((a: any, b: any)  =>  +Intl.DateTimeFormat('ru').format(Date.parse(b.snippet.publishedAt)) -  +Intl.DateTimeFormat('ru').format(Date.parse(a.snippet.publishedAt))); 
        return titleInput
      } else {
      titleInput.sort((a: any, b: any) => +Intl.DateTimeFormat('ru').format(Date.parse(a.snippet.publishedAt)) - +Intl.DateTimeFormat('ru').format(Date.parse(b.snippet.publishedAt)));
        return titleInput
      }
      
    }
  }
}
