import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { UserResponse } from '../../models/user-response';
import { userRequest } from '../../models/user-request';
export function updateUser(http: HttpClient, rootUrl: string, userRequest: userRequest, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(rootUrl,updateUser.PATH, 'patch');
    rb.body(userRequest, 'application/json');  // Pass the updated user data in the request body

    return http.request(
        rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
        filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
            return r as StrictHttpResponse<any>;
        })
    );
}

updateUser.PATH = '/User/update'; 