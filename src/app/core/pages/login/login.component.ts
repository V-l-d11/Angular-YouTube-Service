import { Component ,OnInit} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormRecord, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable , of} from 'rxjs';
import { ValidServiceService } from '../../services/valid-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form:FormGroup

  loginForm: any = {
    login: '',
    password: '',
  }

  

  submit() {
    if (this.form.valid) {
       console.log('Form submitted ', this.form)
      const formData = { ...this.form.value }
      console.log(formData, 'Form Data')
      localStorage.setItem('user', JSON.stringify(formData))
      this.router.navigateByUrl('/home');
    }
   }
   
  constructor(public router:Router , public userValidathion:ValidServiceService ) {
   
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('',
        [ Validators.email,
          Validators.required]
         
      ),
      password: new FormControl('',
        [ Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
          this.passwordValidator.bind(this),
        ]
      )
    })
 

 

  }


  public  passwordValidator(control: AbstractControl){
     
    const value = control.value;
  
    const hasNumber = /[0-9]/.test(value);
  
    const hasCapitalLetter = /[A-Z]/.test(value);

    const hasLowercaseLetter = /[a-z]/.test(value);
   
   
 
    const passwordValid = hasNumber && hasCapitalLetter && hasLowercaseLetter ;
    if (!hasNumber) {
      return {invalidPasswordNumber:"Пароль должен содержать цыфры"}
    } 
    if (!hasCapitalLetter) {
      return {invalidPasswordBigLatters: "Пароль должен  содержать заглавные буквы"}
    }
    if (!hasLowercaseLetter) {
      return {invalidPassworsmallLetters: "Пароль должен содержать маленьекие буквы"}
    }
   


    if (!passwordValid) {
     return { invalidPassword: 'Пароль не прошел валидацию' };
    }
    return null;
  }
  




  }

  







