import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import{findAllUsers}from '../fn/user/find-all-user';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response'; 
import { UserResponse } from '../models/user-response';
import { userRequest } from '../models/user-request';
import { findUser } from '../fn/user/get-user-info';
import { updateUser } from '../fn/user/update-user';
import { updateRequest } from '../models/update-Request';
import { AddUsers } from '../fn/user/Add-user';
import { findUsergroupMember } from '../fn/user/find-user-group-member';
@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }
  /* ------------------------ */
  updateUser(userRequest: userRequest, context?: HttpContext): Observable<any> {
    return this.updateUser$Response(userRequest,context).pipe( map((r: StrictHttpResponse<any>): any => r.body));}
  
  
    updateUser$Response(userRequest:userRequest, context?: HttpContext):Observable<StrictHttpResponse<any>> {
    return updateUser(this.http, this.rootUrl,userRequest, context); }
 
 /* ------------------------ */
    searchGroupMembers(searchQuery: string) {
    throw new Error('Method not implemented.');
  }
    
    /* ------------------------ */
    findAllUsers$Response(context?: HttpContext):Observable<StrictHttpResponse<UserResponse[]>> {
        return findAllUsers(this.http, this.rootUrl, context); 
    }
    findAllUsers(context?: HttpContext):Observable<UserResponse[]> {
        return this.findAllUsers$Response(context).pipe( map((r: StrictHttpResponse<UserResponse[]>): UserResponse[] => r.body)
    );
    }
    /* ------------------------ */
    findUserById$Response(userId: number, context?: HttpContext): Observable<StrictHttpResponse<UserResponse>> {
        return findUser(this.http, this.rootUrl, userId, context);
      }
      findUserById(userId: number, context?: HttpContext): Observable<UserResponse> {
        return this.findUserById$Response(userId, context).pipe(
          map((r: StrictHttpResponse<UserResponse>):UserResponse => r.body)
        );
      }
/* ------------------------ */
      AddUser(updateRequest: updateRequest, context?: HttpContext): Observable<any> {
        return this.AddUser$Response(updateRequest,context).pipe( map((r: StrictHttpResponse<any>): any => r.body)
      );
      }
      AddUser$Response(updateRequest:updateRequest, context?: HttpContext):Observable<StrictHttpResponse<any>> {
        return AddUsers(this.http, this.rootUrl,updateRequest, context); 
    }
    /* ------------------------ */
    findUsergroupMember$Response(context?: HttpContext):Observable<StrictHttpResponse<UserResponse[]>> {
      return findUsergroupMember(this.http, this.rootUrl, context); 
  }
  findUsergroupMember(context?: HttpContext):Observable<UserResponse[]> {
      return this.findUsergroupMember$Response(context).pipe( map((r: StrictHttpResponse<UserResponse[]>): UserResponse[] => r.body)
  );
  
}}