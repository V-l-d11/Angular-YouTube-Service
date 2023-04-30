import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/app/models/ItemTestM';

@Pipe({
  name: 'filterInput'
})
export class FilterInputPipe implements PipeTransform {

  transform(titleInput: Item[], filterText: string){
    
    if (titleInput.length === 0 || filterText === "") {
      return titleInput;
    } else {
    
      return titleInput.filter((item) => {
        return item.snippet?.title?.toLowerCase().includes( filterText.toLowerCase()) 
      })
     
     

    }
  
  }

}
