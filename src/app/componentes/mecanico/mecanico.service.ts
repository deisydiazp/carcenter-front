import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {

  private URL = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  crearMecanico(mecanico: any) {
    return this.http.post<{ contenido: any, estado: 'OK' | 'ERROR' }>(
        `${this.URL}/mecanico/crear`,
        { contenido: mecanico },
        { observe: 'body', responseType: 'json' })
        .pipe(
            catchError(e => {
                if (e.status === 500) {
                    /*Alerta.error({
                        titulo: 'Error inesperado',
                        texto: e.error.mensaje
                    })*/
                    console.log("error");
                }

                return of({ contenido: e.error, estado: 'ERROR' })
            }),
            map(resp => !resp.estado ? { ...resp, estado: 'OK' } : resp)
        )
  }

  consultaMecanicosAsignar() {
    return this.http.get<{ contenido: Array<any>, estado: 'OK' | 'ERROR' }>(`${this.URL}/mecanico/asignar`, 
      { observe: 'body', responseType: 'json' })
        .pipe(
            catchError(e => {
                if (e.status === 500) {
                    /*Alerta.error({
                        titulo: 'Error inesperado',
                        texto: e.error.mensaje
                    })*/
                    console.log("error");
                }

                return of({ contenido: e.error, estado: 'ERROR' })
            }),
            map(resp => !resp.estado ? { ...resp, estado: 'OK' } : resp)
        );
}
}
