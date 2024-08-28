/* tslint:disable */
/* eslint-disable */
import { GroupeResponse } from "./groupe-response";
import { numberResponse } from "./number-response";
export interface UserResponse {
   id:number ;
  fullname:string ;
   email:string;
   password :string;
   poste :string ;
   roles:string;
   numbers:number;
   groupe:string;
   createdDate:Date;
    
}