import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CoreService } from 'src/app/services/service/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { AuthenticationService } from 'src/app/services/service/auth.service';
import {AuthenticationRequest} from 'src/app/services/models/authentication-request';
import {TokenService} from 'src/app/services/token/token.service';
import{WebSocketService}from 'src/app/services/service/WebSocket.service'

@Component({
  selector: 'app-boxed-login',
  standalone: true,
  imports: [CommonModule,RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './boxed-login.component.html',
})
export class AppBoxedLoginComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService, private router: Router,private authService: AuthenticationService, private tokenService: TokenService,private WebSocketService:WebSocketService) { }

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
    
  });
  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];


  get f() {
    return this.form.controls;
  }

  submit() {
    this.authRequest.email=this.form.get('uname')?.value || '';
    this.authRequest.password=this.form.get('password')?.value || '';
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string; 
        this.WebSocketService.connect( this.tokenService.token);
        
        if(this.tokenService.userRoles.at(0)=='User'){
          this.router.navigate(['/dialer']);
        }
       else{ this.router.navigate(['/activity']);}
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.error);
        }
      }
    });
    /* if (this.form.valid) {
      const username = this.form.get('uname')?.value || '';
      const password = this.form.get('password')?.value || '';
      console.log(username)
      this.authService.login(username , password as string).subscribe(
        response => {
          if (response) {
            // Navigate to the dashboard
            this.router.navigate(['/dashboards/dashboard1']);
          }
        },
        error => {
          console.error('Login failed', error);
        }
      );
    } */
  }
}
