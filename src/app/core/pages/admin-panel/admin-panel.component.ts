import { Component , EventEmitter, OnInit, Output} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Store, select} from '@ngrx/store'
import * as AdminPanel from '../../../redux/admin-store/selectors/admin.selectors';
import { addVideo } from '../../../redux/admin-store/actions/admin.actions';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  submitted: false;
  public adminForm: FormGroup;
  @Output() public save = new EventEmitter();

  url$: Observable<string> = this.store$.pipe(select(AdminPanel.getUrl));
  title$: Observable<string> = this.store$.pipe(select(AdminPanel.getTitle))
  


  constructor(private fb:FormBuilder, private store$: Store) {
    
  }
  get m() {
    return this.adminForm.controls;
  }
  get v() {
    return this.adminForm.controls;
  }
  

  
ngOnInit() {
  
  this.adminForm = this.fb.group({
    title: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]],
    description: ['',[Validators.maxLength(255)]],
    img: ['',[ Validators.required,
    //  Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')   
    ]],
    linkVidoe: ['', [Validators.required,
     // Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
    ]],
    date: ['', [Validators.required,
      //Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),
      this.isDateTruth
    ]
    ]
  } , {validator: this.isDateTruth})
    


    
}
  
   
  public isDateTruth(control: AbstractControl) {

    let currentDateTime = new Date();
    currentDateTime.setHours(0,0,0,0);

    let controlValue = new Date(control.value);
    controlValue.setHours(0,0,0,0);

    
    if(currentDateTime<control.value)
    {
        return {response: true};
    }
    return null
  }

  public submit() {
    console.log('Submit !', this.adminForm.value);
    this.save.emit(this.adminForm.value)
    console.log(this.adminForm.value, 'adminForm')
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.adminForm.value, null, 4))
    this.store$.dispatch(addVideo(this.adminForm.value));
    console.log(this.url$,'is url')
  }
  onReset() {
    this.submitted = false;
    this.adminForm.reset();
}
  
  
}
