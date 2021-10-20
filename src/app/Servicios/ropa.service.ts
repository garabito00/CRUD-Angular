import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Ropa } from '../Interface/ropa';

@Injectable({
  providedIn: 'root'
})
export class RopaService {

  constructor(private http: HttpClient) { } 

  //URL para alcanzar la API
  private url = 'https://apiaspnet.somee.com/';
  private api = 'api/ropa/';

  //Metodo no utilizado 
  //Metodo para Manejar Errores
  private manejarErrores(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Ocurrio un error:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `El Backend envio el codigo ${error.status}, el mensaje dice: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Algo malo ha ocurrido; Intentelo mas tarde.');
  }
  
//Metodo para buscar todos los registros al backend HttpGet
  ReadRopas(){
    let promesas = new Promise((resolve: any, reject: any) =>{
      this.http.get(this.url + this.api).toPromise().then(
        res => {
          resolve(res);
        }, err => {
          console.log(`Status Code: ${err.status}. Message: ${err.error.message}`);
          reject(err);
        }
      );
    });

    return promesas;
  }

  //Metodo para buscar un solo registro al backend filtrandolo por ID HttpGet({id})
  ReadOneRopa(id: number){

    let promesa = new Promise((resolve: any, reject: any)=>{
      this.http.get(this.url + this.api + id).toPromise().then(
        res=>{
          resolve(res);
        }, err => {
          console.log(`Status Code: ${err.status}. Message: ${err.error.message}`);
          reject(err);
        }
      );
    });

    return promesa;
  }

  //Metodo para eliminar un registro del backend HttpDelete({id})
  DeleteRopa(id: number){
    let promesa = new Promise((resolve: any, reject: any)=>{
      this.http.delete(this.url + this.api + id).toPromise().then(
        res => {
          resolve(res);
        }, err => {
          console.log(`Status Code: ${err.status}. Message: ${err.error.message}. No existe registro con este ID`);
        }
      );
    });

    return promesa;
  }

  //Metodo para Ingresar un registro al backend HttpPost
  PostRopa(ropa: Ropa){
    let promesa = new Promise((resolve: any, reject: any)=>{
      this.http.post(this.url + this.api, ropa).toPromise().then(
        res => {
          resolve(res);
        }, err => {
          console.log(`Status Code: ${err.status}. Message: ${err.error.message}`);
          reject(err);
        }
      );
    });

    return promesa;
  }

  //Metodo para actualizar un registro en el backend HttpPut({id})
  UpdateRopa(id: number, ropa: Ropa){
    let promesa = new Promise((resolve: any, reject: any)=>{
      this.http.put(this.url + this.api + id, ropa).toPromise().then(
        res => {
          resolve(res);
        }, err => {
          console.log(`Status Code: ${err.status}. Message: ${err.error.message}`);
          reject(err);
        }
      );
    });

    return promesa;
  }
}
