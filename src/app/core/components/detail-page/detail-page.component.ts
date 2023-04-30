import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item, Root } from '../../../models/ItemTestM';

import { ServiceServerService } from '../../services/service-server.service';


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit{
  card:Item[];
  element: Item | undefined;
  id: string | undefined;
  elements: Root;
  private subscription: Subscription;

  constructor(private serverServise:ServiceServerService,private activateRoute: ActivatedRoute, public router:Router) {
 
    this.subscription = activateRoute.params.subscribe(params => {
      this.id = params['id']
    });
  
    this.serverServise.getItem(this.id).subscribe((response: Root) => {
      this.elements = response;
      this.element = this.elements.items[0]
    })
  }
  
  goBack() {
    this.router.navigateByUrl('/home');
  }
  
  ngOnInit() {
  }
}
