import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { testU } from 'src/app/models/ItemTestM';
@Injectable({
  providedIn: 'root'
})
export class ValidServiceService {
  public users: string[];
  public userg: testU= JSON.parse(localStorage.getItem('user') || '{}');

 

  constructor() { 
 
  this.users=['yulrijda@bk.ru']

  }

  validateName(userName: string): Observable<ValidationErrors> {
 
    return new Observable<ValidationErrors>(observer => {
     const user = this.users.find(user => user === userName);
   
     if (user) {
      observer.next({
       nameError: 'Пользователь с таким именем уже существует'
      });
       observer.complete();
      }
  
      observer.next({
        nameError: ''
      });
      observer.complete();
     })
    }
  
}
