import { Component , Input} from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/ItemTestM';

@Component({
    selector: 'app-videoCard',
    templateUrl: './videoCard.component.html',
    styleUrls: ['./videoCard.component.scss']
})

export class VideoCardComponent  {
    @Input() public card:Item;
    
    constructor(public route: Router) {
    
    }
    
    linkForPage(el:Item) {
        const nowVideo = el.id.videoId;
        this.route.navigate(['more', nowVideo])
    }
 
}