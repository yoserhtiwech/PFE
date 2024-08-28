import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { UserResponse } from '../../models/user-response';
import { CallLogsResponse } from '../../models/CallLogsResponse';
export function findGroupCallLogs(http: HttpClient, rootUrl: string,groupId: number,context?: HttpContext) :Observable<StrictHttpResponse<CallLogsResponse[]>>{
    const rb = new RequestBuilder(rootUrl, findGroupCallLogs.PATH.replace('{groupId}', groupId.toString()), 'get');
    return http.request(
        rb.build({ responseType: 'json', accept: 'application/json', context })
      ).pipe(
        filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<CallLogsResponse[]>;
        })
      );
    }

    findGroupCallLogs.PATH = '/User/findUser/{groupId}';