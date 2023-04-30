import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Root } from 'src/app/models/ItemTestM';
import { Item } from 'src/app/models/ItemTestM';
import {  map ,EMPTY, Observable, retry, shareReplay , of} from 'rxjs';
import { catchError } from 'rxjs';
import { Page } from '../components/main/contentPartCard/page';

@Injectable({
  providedIn: 'root'
})
export class ServiceServerService {
  private baseUrl: string = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBYCJKT-7ishEEb-TRm9jM-OTThT8ouzvE&type=video&part=snippet&maxResults=15&q=js';
  cardsAr: Root;
  private baseUrlForPaginathion: string=   'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBYCJKT-7ishEEb-TRm9jM-OTThT8ouzvE&type=video&part=snippet';


  constructor(private httpClient: HttpClient) {
  
  }
 
  private handleError<T>(operathion = 'operathion' , result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }


  getList(): Observable<Root> {
    return this.httpClient.get<Root>(this.baseUrl).pipe(
      catchError(this.handleError<Root>('getVideos'))
    )
  }

  searchVideos(term: string):Observable<Item[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.httpClient.get<Item[]>(`${this.baseUrl}/?${term}`)
  }
  

  getItem(id: string | number| undefined):Observable<Root> {
    return this.httpClient.get<Root>(`${this.baseUrl}/${id}`);
  }

  getListTest(): Observable<Item[]> {
    return this.httpClient.get<Root>(this.baseUrl).pipe(
      map(data => {
        if (!data.items || !data.items.length) {
          return [];
        }
        const items: Item[] = [];
        for (let key in data) {
          items.push(...data.items)
        }
     
        return items;
      })
    )
  }

  getListPaginathion(page:number){
    return this.httpClient.get(this.baseUrlForPaginathion, {
      params: new HttpParams().set('maxResults' , `${page}`)
    }).subscribe(data => {
      console.log(data);
    })

  } 


  getListTestPaginathion(page:number, itemsPerPage:number): Observable<Page> {
   var posts= this.httpClient.get<Root>(this.baseUrl).pipe(
      map(data => {
        if (!data.items || !data.items.length) {
          return [];
        }
        const items: Item[] = [];
        for (let key in data) {
          items.push(...data.items)
        }
        return items;
      })
   )
    return this.getPageItems(posts, page, itemsPerPage);
    
  }

  private getPageItems(poats:Observable<Array<any>>,page:number, itemsPerPage:number):Observable<Page> {
    return poats.pipe(
      map(p => {
        var startIndex = itemsPerPage * (page - 1);
        return new Page(p.length ,p.slice(startIndex, startIndex + itemsPerPage));
      })
    );
  }



}
