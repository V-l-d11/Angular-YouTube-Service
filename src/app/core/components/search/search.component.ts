import { Component ,Inject , EventEmitter, OnInit, Output, Input} from '@angular/core';
import { Router } from '@angular/router';
import { DataHandlerService } from 'src/app/core/services/-data-handler-.service';
import { Item } from 'src/app/models/ItemTestM';
import { Observable, Subject, debounce, debounceTime, distinctUntilChanged, switchMap, filter, catchError, EMPTY } from 'rxjs';
import { ServiceServerService } from '../../services/service-server.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
    @Output() onChange = new EventEmitter<boolean>();

    public isAuth: boolean = true; 
    public Auth:any= {};
    hide: boolean = false;
    findControl = new FormControl();
    filtvideos: Item[] | null;
    error: boolean = false; 

    
     
    

    private searchTerms = new Subject<string>();

    change(increased: any) {
        this.onChange.emit(increased)
    }

    logout() {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/login')
        this.isAuth = false; 
        this.DataHandlerService.obserAuth(this.isAuth);
    }
    
    goToAdminPanel() {
        this.router.navigateByUrl('/adminPanel');
    }

    
    constructor(public router: Router ,private DataHandlerService:DataHandlerService, private http:ServiceServerService) {
       console.log(this.isAuth, 'isAuth')
     }
    
    ngOnInit() {
        this.Auth = localStorage.getItem('user')
        this.DataHandlerService.$isAuth.subscribe((el: boolean) => this.isAuth = el);
        
        this.findControl.valueChanges.pipe(
            filter(value => value.length > 3),
            debounceTime(1000),
            switchMap(value => this.http.searchVideos(value).pipe(
                catchError(err => {
                    console.log(err, 'Error request');
                    this.filtvideos = null;
                    this.error = true;
                    return EMPTY;
                })
            ))
        ).subscribe(video => {
            this.filtvideos = video;
            console.log(this.filtvideos, 'This Filt Video')
            this.error = false; 
            console.log(this.filtvideos, 'FILT VIDEOS');
            this.DataHandlerService.setFilterVideo(this.filtvideos );
        })
    
    
        



    }  


}