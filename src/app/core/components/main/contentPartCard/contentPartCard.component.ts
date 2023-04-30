import { Component , OnInit} from '@angular/core';
import { DataHandlerService } from 'src/app/core/services/-data-handler-.service';
import { Item, Root } from 'src/app/models/ItemTestM';
import { HttpClient } from '@angular/common/http';
import { ServiceServerService } from 'src/app/core/services/service-server.service';
import {Store, select} from '@ngrx/store' 
import { Observable } from 'rxjs';
import { getData, getLoaded, getLoading, getServerError } from 'src/app/redux/admin-store/selectors/server.selector';
import { getVideos, loadserverData } from 'src/app/redux/admin-store/actions/server.actions';
import { ServerState } from 'src/app/redux/admin-store/reducers/ServerReducer';



@Component({
    selector: 'app-contentPartCard',
    templateUrl: './contentPartCard.component.html',
    styleUrls: ['./contentPartCard.component.scss']
})

export class ContentPartCardComponent implements OnInit {
    order: string = 'asc'; 
    isSort:boolean = false;
    inputEl:string= '';
    cardsAr : Item[] ;
    response: any;
    baseUrl: string = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBYCJKT-7ishEEb-TRm9jM-OTThT8ouzvE&type=video&part=snippet&maxResults=15&q=js';
    videos: Root | undefined;
    filtvid: Item[] | undefined;
    public collectionSize: number;
    public page: number;
    public itemsPerPage: number = 5;
    public collectionPage: number;
    public posts: Array<any>;
   

     
    actions$: Observable<Item[] | null | undefined> = this.stor$.pipe(
        select(getData)
    ) 


    loding$: Observable<boolean> = this.stor$.pipe(
      select(getLoading)  
    );
    loaded$: Observable<boolean> = this.stor$.pipe(
        select(getLoaded)
    )
    serverError$: Observable<string> = this.stor$.pipe(
        select(getServerError)
    );    
    
    serverError = '';
    testVal$ :Observable<any> = this.stor$.pipe(select(getData))
    constructor(private dataThumb:DataHandlerService, private http:HttpClient, private serverServise:ServiceServerService , private stor$:Store<ServerState>) {
        this.page = 2;
        this.loadPage();
    }

    onPageChanged() {
        this.loadPage();
    }

    private loadPage() {
        this.serverServise.getListTestPaginathion(this.page,this.itemsPerPage)
        .subscribe(p => {
          this.posts= p.rows
         this.collectionPage = p.totlaCount;
          console.log(this.collectionPage , 'COllec')
          console.log(this.posts, 'This Posts')   
        })
    }
     

    ngOnInit() {
        this.dataThumb.$order.subscribe((el: string) => this.order = el); 
        this.dataThumb.$inputEl.subscribe((el: string) => this.inputEl = el);
        this.dataThumb.$isSort.subscribe((el: boolean) => this.isSort = el);
        this.dataThumb.$filterVideo.subscribe((el:Item[])=>this.filtvid=el )
        //this.stor$.dispatch(loadserverData())
        this.stor$.dispatch(getVideos())
      
      
    }


}