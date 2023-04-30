import { Component , OnInit, Input} from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    template: './search.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeadersComponent implements OnInit {
    
    hide: boolean = false;
  
  
    onChange(increased: any) {
        increased == true ? this.hide = true : this.hide = false;
    }
    
    constructor() {
       
    }
    
    ngOnInit() {
        
    }

}