import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import{findAllCallLogs} from'../fn/Logs/findAllCallLogs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response'; 
import { CallLogsResponse } from '../models/CallLogsResponse';
import { findAllSmsLogs } from '../fn/Logs/findAllSmsLogs';
import { findGroupCallLogs } from '../fn/Logs/findGroupCallLogs';
import { findGroupSmsLogs } from '../fn/Logs/findGroupeSmsLogs';
import { SmsLogsResponse } from '../models/SmsLogsResponse';
@Injectable({ providedIn: 'root' })
export class LogsService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
      }
    
    findAllCallLogs$Response(context?: HttpContext):Observable<StrictHttpResponse<CallLogsResponse[]>> {
        return findAllCallLogs(this.http, this.rootUrl, context); 
    }

    
    findAllCallLogs(context?: HttpContext):Observable<CallLogsResponse[]> {
        return this.findAllCallLogs$Response(context).pipe( map((r: StrictHttpResponse<CallLogsResponse[]>): CallLogsResponse[] => r.body)
    );
    }
    findGroupCallLogs$Response(groupId: number,context?: HttpContext):Observable<StrictHttpResponse<CallLogsResponse[]>> {
        return findGroupCallLogs(this.http, this.rootUrl,groupId, context); 
    }

    
    findGroupCallLogs(groupId: number,context?: HttpContext):Observable<CallLogsResponse[]> {
        return this.findGroupCallLogs$Response(groupId,context).pipe( map((r: StrictHttpResponse<CallLogsResponse[]>): CallLogsResponse[] => r.body)
    );
    }
    findAllSmsLogs$Response(context?: HttpContext):Observable<StrictHttpResponse<SmsLogsResponse[]>> {
        return findAllSmsLogs(this.http, this.rootUrl, context); 
    }

    
    findAllSmsLogs(context?: HttpContext):Observable<SmsLogsResponse[]> {
        return this.findAllSmsLogs$Response(context).pipe( map((r: StrictHttpResponse<SmsLogsResponse[]>): SmsLogsResponse[] => r.body)
    );
    } 
    findGroupSmsLogs$Response(groupId: number,context?: HttpContext):Observable<StrictHttpResponse<SmsLogsResponse[]>> {
        return findGroupSmsLogs(this.http, this.rootUrl,groupId, context); 
    }

    
    findGroupSmsLogs(groupId: number,context?: HttpContext):Observable<SmsLogsResponse[]> {
        return this.findGroupCallLogs$Response(groupId,context).pipe( map((r: StrictHttpResponse<SmsLogsResponse[]>): SmsLogsResponse[] => r.body)
    );
    }
}