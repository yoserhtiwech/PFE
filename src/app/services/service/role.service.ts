import { Injectable } from "@angular/core";
import { BaseService } from "../base-service";
import { roleNames } from "../fn/role/roleNames";
import { HttpContext } from "@angular/common/http";
import { StrictHttpResponse } from "../strict-http-response";
import {  Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RoleService extends BaseService {
    roleNames$Response(context?: HttpContext):Observable<StrictHttpResponse<string[]>> {
        return roleNames (this.http, this.rootUrl, context); 
    }

    
    roleNames(context?: HttpContext):Observable<string[]> {
        return this.roleNames$Response(context).pipe( map((r: StrictHttpResponse<string[]>): string[] => r.body)
    );
    }
}