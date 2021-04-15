import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/UserInfo';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,    
    private router: Router,
    private authService: AccountService,
  ) { }

  formLogin: FormGroup;
  usuario: UserInfo;

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.maxLength(250), Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    if (this.formLogin.invalid) {
      window.alert("Complete los campos");
      return;
    }
    this.usuario = new UserInfo();
    this.usuario.UserName = this.formLogin.value.email;
    this.usuario.Password = this.formLogin.value.password;    

    this.authService.login(this.usuario).subscribe(token => this.recibirToken(token),
    error => this.manejarError(error));
  }

  recibirToken(token) {
    localStorage.setItem('token', token.token);
    localStorage.setItem('tokenExpiration', token.expiration);
    this.router.navigate(["profesores"]);
  }

  manejarError(error) {
    if (error && error.error) {
      alert(error.error["Usuario o Contraseña inválidos."]);
    }
  }
  




}
