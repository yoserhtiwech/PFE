import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response'; 
import { numberResponse } from '../models/number-response';
import { findAllNumbers } from '../fn/number/find-all-numbers';
import { numeroAvailable } from '../fn/number/getAvailableNumber';
@Injectable({ providedIn: 'root' })
export class NumberService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
      }
    findAllNumbers$Response(context?: HttpContext):Observable<StrictHttpResponse<numberResponse[]>> {
        return findAllNumbers(this.http, this.rootUrl, context); 
    }

    
    findAllNumbers(context?: HttpContext):Observable<numberResponse[]> {
        return this.findAllNumbers$Response(context).pipe( map((r: StrictHttpResponse<numberResponse[]>): numberResponse[] => r.body)
    );
    }
    findAvailableNumbers$Response(context?: HttpContext):Observable<StrictHttpResponse<numberResponse[]>> {
        return numeroAvailable(this.http, this.rootUrl, context); 
    }

    
    findAvailableNumbers(context?: HttpContext):Observable<numberResponse[]> {
        return this.findAvailableNumbers$Response(context).pipe( map((r: StrictHttpResponse<numberResponse[]>): numberResponse[] => r.body)
    );
    }
}