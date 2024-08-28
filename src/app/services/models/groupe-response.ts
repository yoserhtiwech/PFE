/* tslint:disable */
/* eslint-disable */
import { numberResponse } from "./number-response";
import { UserResponse } from "./user-response";
export interface GroupeResponse {
    id: number;
    name:string;
    users:UserResponse[]  
    
}