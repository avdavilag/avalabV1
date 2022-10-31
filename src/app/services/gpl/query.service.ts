import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(
    private apollo: Apollo,
  ) { }
  getListOrigen() {
    let gqlListOrigen = gql`
        {
        ListOrigen{
          des_ori,
          cod_ori,
          ubicaciones{
            nombre_ubicacion
            id_ubicacion
          }   
         
       } 
     }
       
`;
    let result: any = this.apollo.query({
      query: gqlListOrigen
    }).toPromise();
    console.log(result);
    /*this.apollo.watchQuery({
      query: this.gqlListOrigen
    })
      .valueChanges
      .subscribe
      (result => {
        let data;
        data = result.data;
        this.listOrigen=data.ListOrigen;
        });
  */
    return result;
  }
}
