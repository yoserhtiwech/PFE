import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/service/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { TokenService } from 'src/app/services/token/token.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-side-register',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-register.component.html',
})
export class AppSideRegisterComponent implements OnInit {
  tokenData: any = null;
  options = this.settings.getOptions();

  
  constructor(private settings: CoreService, private router: Router,private route: ActivatedRoute ,private TokenService:TokenService) { }
  decryptToken(encodedToken:any) {
    // Decode the Base64 encoded token
    const decodedString = atob(encodedToken);

    // Split the decoded string by the delimiter `|`
    const [email, activationCode] = decodedString.split('|');

    // Return the extracted data
    return {
        email: email,
        activationCode: activationCode
    };
}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        try {
          const jwtHelper = new JwtHelperService();
          this.tokenData =this.decryptToken(token);
console.log(this.tokenData);
          if (this.tokenData){ 
          this.form.patchValue({ email: this.tokenData.email });}
          //this.form.patchValue({ Group: this.tokenData.group });
         // this.form.patchValue({ Number: this.tokenData.number });}
        } catch (e) {
          // Handle decoding errors
        }
      }
    });
  }
 

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl({ value: '', disabled: true }, ),
    Group:new FormControl({ value: '', disabled: true }),
    Number:new FormControl({ value: '', disabled: true }),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    // console.log(this.form.value);
    this.router.navigate(['/dashboards/dashboard1']);
  }
}
