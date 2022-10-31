import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

constructor(
  private httpClient:HttpClient, 
  ){ }

public onLogin(usuario:string,pwd:string,device:string): Observable<any>{
  console.log("Entra al servicio de Login");
let body = new URLSearchParams();
let fomData:any= new FormData();

console.log("Entra al servicio de Login 11");
fomData.append("usuario", usuario);
fomData.append("pwd", pwd);
fomData.append("device",device );

console.log("Aqui mirar usuario 2: "+usuario);
console.log("Aqui mirar pwd 2: "+pwd);
console.log("Aqui mirar device 2: "+device);

return this.httpClient.post('http://192.168.1.254:9180/intranet/login',fomData)
// return this.httpClient.post('http://192.168.1.254:9180/intranet/login',{usuario:usuario,pwd:pwd,device:device})
};    
}  
  
// onLogin(usario:string,password:string){
//   //BrowserDynamicTestingModule
  
// return this.http.post(this.envService.API_URL,usario);
//   }

