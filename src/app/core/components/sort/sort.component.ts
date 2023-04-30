import { Component , OnInit , Input, Output, EventEmitter} from '@angular/core';
import { DataHandlerService } from 'src/app/core/services/-data-handler-.service';


@Component({
    selector: 'app-sort',
    templateUrl: './sort.component.html',
    styleUrls: ['./sort.component.scss']
})

export class SortComponent implements OnInit {
    public filterText: string = '';
    public isSort: boolean = false;
    public order: "asc" | "desc" = "asc";

    @Input() public hide: boolean;
    @Input() set addVal(value: string) {
        this.filterText = value;
        this.DataHandlerService.setInputEl(this.filterText);
    };

   
    
    onChangeSort(incr: any) {
        incr === true ? this.isSort = true : this.isSort = false; 
        this.DataHandlerService.setIsSort(this.isSort);
    }
    onChangeOrder() {
        this.order = this.order === 'asc' ? 'desc' : 'asc';
        this.DataHandlerService.setOrderCount(this.order);
    }
    
   
    
    constructor(private DataHandlerService:DataHandlerService) {
       
    }
    ngOnInit() {
       
        
    }
}