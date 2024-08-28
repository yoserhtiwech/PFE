import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
//import { UserResponse } from '../../models/user-response';
import { GroupeResponse } from '../../models/groupe-response';
export function groupeNames(http: HttpClient, rootUrl: string,context?: HttpContext) :Observable<StrictHttpResponse<string[]>>{
    const rb = new RequestBuilder(rootUrl, groupeNames.PATH, 'get');
    return http.request(
        rb.build({ responseType: 'json', accept: 'application/json', context })
      ).pipe(
        filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<string[]>;
        })
      );
    }

    groupeNames.PATH = '/Group/getAllGroupNames'; 