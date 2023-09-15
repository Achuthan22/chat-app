import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword: boolean = true;

  loginform!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _loginService: LoginService) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.loginform = this._formBuilder.group({
      UserID: ["achuwbc@gmail.com", Validators.required],
      Password: ["Etxadmin1!", Validators.required]
    })
  }

  public loginFormSubmit() {
    this._loginService.login(this.loginform.value).subscribe(
      res => {
        console.log(res);
      }
    )
  }
}
