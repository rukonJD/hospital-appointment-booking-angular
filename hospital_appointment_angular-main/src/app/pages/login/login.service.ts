import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginComponent } from "./login.component";

export class UserLoginhttp{
    [x: string]: any;
    baseUrl:string="http://localhost:3000/signUpUser";
    
    constructor(private httpClient:HttpClient){

    }

    userLoginHttp(value: any): Observable<any>{
        return this.httpClient.post(this.baseUrl,LoginComponent)


    }

    userLoginHtt(value: any): Observable<any>{
        return this.httpClient.get(this.baseUrl)


    }

  

}