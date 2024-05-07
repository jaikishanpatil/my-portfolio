import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpService: HttpClient) { }

  getClientData():Observable<any>{
    return this.httpService.get<Observable<any>>("./assets/jaikishan_data.json").pipe(
      map(data=>data)
    )

    
  }
}
