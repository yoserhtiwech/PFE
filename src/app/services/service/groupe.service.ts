import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import{findAllUsers}from '../fn/user/find-all-user';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response'; 
import { GroupeResponse } from '../models/groupe-response';
import { findAllMembers } from '../fn/groupe/find-all-memebers';
import { findMembers } from '../fn/groupe/findMember';
import { UserResponse } from '../models/user-response';
import { groupeNames } from '../fn/groupe/groupeNames';
import { updateGroup } from '../fn/groupe/update-group';
@Injectable({ providedIn: 'root' })
export class GroupeService extends BaseService {
    
    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
      }
    
    findAllMembers$Response(context?: HttpContext):Observable<StrictHttpResponse<GroupeResponse[]>> {
        return findAllMembers(this.http, this.rootUrl, context); 
    }

    
    findAllMembers(context?: HttpContext):Observable<GroupeResponse[]> {
        return this. findAllMembers$Response(context).pipe( map((r: StrictHttpResponse<GroupeResponse[]>): GroupeResponse[] => r.body)
    );
    } 
    findGroupName$Response(context?: HttpContext):Observable<StrictHttpResponse<string[]>> {
        return groupeNames(this.http, this.rootUrl, context); 
    }

    
    findGroupName(context?: HttpContext):Observable<string[]> {
        return this. findGroupName$Response(context).pipe( map((r: StrictHttpResponse<string[]>): string[] => r.body)
    );
    }

    
    findMembers$Response(groupName:string,context?: HttpContext):Observable<StrictHttpResponse<UserResponse[]>> {
        return findMembers(this.http, this.rootUrl,groupName, context); 
    }

    
    findMembers(groupName: string,context?: HttpContext):Observable<UserResponse[]> {
        return this. findMembers$Response(groupName,context).pipe( map((r: StrictHttpResponse<UserResponse[]>): UserResponse[] => r.body)
    );
    }

    updategroup(groupname:string,updateRequest: string , context?: HttpContext): Observable<any> {
        return this.updategroup$Response(groupname,updateRequest,context).pipe( map((r: StrictHttpResponse<any>): any => r.body)
      );
      }
      updategroup$Response( groupname: string,updateRequest:string, context?: HttpContext):Observable<StrictHttpResponse<any>> {
        return updateGroup(this.http, this.rootUrl,groupname,updateRequest, context); 
    }
}