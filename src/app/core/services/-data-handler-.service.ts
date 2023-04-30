import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subject  } from 'rxjs';
import { Item } from 'src/app/models/ItemTestM';


@Injectable({
    providedIn:'root'
})

export class DataHandlerService{
    private _isSort = new Subject<boolean>();
    private _filterText= new Subject<string>();
    private _order = new Subject<string>();
    private _isAuth = new Subject<boolean>();
    private _filterVideo = new Subject<Item[]> ();     

    // public filterText$ = new BehaviorSubject<string>('');
    $inputEl = this._filterText.asObservable(); 
    $isSort = this._isSort.asObservable();
    $order = this._order.asObservable();
    $isAuth = this._isAuth.asObservable();
    $filterVideo = this._filterVideo.asObservable();
    
   
   
     
    obserAuth(el:boolean) {
        this._isAuth.next(el); 
    }

    setOrderCount(el:string) {
        this._order.next(el);
    } 

    setInputEl(el: string) {
        this._filterText.next(el);
    }

    setIsSort(el: boolean) {
        this._isSort.next(el);
    }
    
    setFilterVideo(el:Item[]) {
        this._filterVideo.next(el);
    }
    

    constructor() {
     
    }


   
    
}