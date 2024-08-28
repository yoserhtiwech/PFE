import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { CallLogsResponse } from '../../models/CallLogsResponse';
import { SmsLogsResponse } from '../../models/SmsLogsResponse';
export function findAllSmsLogs(http: HttpClient, rootUrl: string,context?: HttpContext) :Observable<StrictHttpResponse<SmsLogsResponse[]>>{
    const rb = new RequestBuilder(rootUrl, findAllSmsLogs.PATH, 'get');
    return http.request(
        rb.build({ responseType: 'json', accept: 'application/json', context })
      ).pipe(
        filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<SmsLogsResponse[]>;
        })
      );
    }

    findAllSmsLogs.PATH = '/Calls/All-call-logs';