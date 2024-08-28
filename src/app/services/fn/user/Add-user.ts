import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { UserResponse } from '../../models/user-response';
import { userRequest } from '../../models/user-request';
import { updateRequest } from '../../models/update-Request';
export function AddUsers(http: HttpClient, rootUrl: string, updateRequest: updateRequest, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(rootUrl,AddUsers.PATH, 'post');
    rb.body(updateRequest, 'application/json');  // Pass the updated user data in the request body

    return http.request(
        rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
        filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
            return r as StrictHttpResponse<any>;
        })
    );
}
    AddUsers.PATH = '/Auth/register'; 