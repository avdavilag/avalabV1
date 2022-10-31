import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
API_URL="http://localhost:8180/graphql"
constructor(
  private httpClient:HttpClient
) { 
  
}

}
