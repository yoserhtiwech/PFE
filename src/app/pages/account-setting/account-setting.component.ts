import { Component, OnInit } from '@angular/core';
import {UserService}from'../../services/service/user.service';
import { UserResponse } from 'src/app/services/models/user-response';
import { TokenService } from 'src/app/services/token/token.service';
import { N } from '@angular/cdk/keycodes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { userRequest } from 'src/app/services/models/user-request';
@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
})

export class AppAccountSettingComponent implements OnInit {
  errorMessage: string | null = null; 
  userForm: FormGroup;
  user:UserResponse;
  userGroup: string;
  id :number
  userFullname: string;
  userEmail: string;
  userNumber: number
  userPassword:string;
  userPoste:string
  userRequest:userRequest;
  constructor(private fb: FormBuilder,private UserService:UserService,private TokenService:TokenService) {}
  ngOnInit(): void { 
    this.userForm = this.fb.group({
      fullname: [''],
      userEmail: [''],
      poste: [''],
      userGroup: [''],
      oldpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      userNumber:['']
    });
    let originalValues: any ; 
   this.id= this.TokenService.getUserId();
   console.log(this.id)
      this.UserService.findUserById(this.TokenService.getUserId()).subscribe((user: UserResponse) => 
        {
          this.userForm.setValue({
            fullname:user.fullname,
            userEmail:user.email,
            poste:user.poste,
            userGroup:user.groupe,
            userNumber:user.numbers,
            oldpassword: '',
            newpassword: '',
            confirmpassword: '',

          });
           originalValues =this.userForm.value; 

    }); 
    
    
    this.userForm.valueChanges.subscribe(() => {
      this.checkForChanges(originalValues);
    });
  } 
  checkForChanges(originalValues: any ): void {

    let currentValues =this.userForm.value;
    // Compare original and current values
    
    this.checkPasswordMatch(
      this.userForm.get('newpassword')?.value,
      this.userForm.get('confirmpassword')?.value); 
    const isChanged = !_.isEqual(originalValues,currentValues);
    // If any field has changed, enable the Save button
    this.isSaveButtonEnabled = isChanged;
  }
  checkPasswordMatch(newPassword: string | null, confirmPassword: string | null): void {
    if (newPassword !== confirmPassword) {
      this.userForm.get('confirmpassword')?.setErrors({ passwordMismatch: true });
    } else {
      this.userForm.get('confirmpassword')?.setErrors(null);
    }
  }
  
  saveUser(): void {
    if (this.userForm.valid) {
      this.userRequest=this.userForm.value;
      // Call the service to update the user data
      this.UserService.updateUser(this.userRequest).subscribe(response => {
        console.log('User updated successfully', response);
        // Optionally, reset the form to mark fields as unchanged
        this.userForm.markAsPristine();
        this.isSaveButtonEnabled = false;
      },
      error => {
        this.errorMessage = 'Failed to change password: ' + error.message; // Display error message from backend
        })}}
  
  isSaveButtonEnabled = false;
}
