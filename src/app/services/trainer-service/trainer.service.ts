import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from 'src/app/models/trainer-model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private httpClient: HttpClient) { }

  // plan: make  button for createTrainer() in navbar 
  // 
  // saveTrainerMoney can have specific button on each page
  // could also attach it to component lifecycle so when
  // user leaves a page, it saves

  // tbh, saveTrainerMoney might eventually expand into save everything

  //getTrainerMoney is for
  //can use sessionStorage for trainer data

  createTrainer(): Observable<Trainer | null>{
    return this.httpClient.post<any>(`${environment.trainerRoute}/trainers`, '')
      .pipe(
        map((res: HttpResponse<Trainer>) => {
          console.log(res.headers);
          return res.body;
        })
      );
    
  }

  getTrainerMoney(trainerId: number): Observable<number>{
    return this.httpClient.get<any>(`${environment.trainerRoute}/trainers/${trainerId}/money`);
  }

  saveTrainerMoney(trainerId: number, newMoney: number): Observable<number | null>{
    return this.httpClient
      .put<any>(`${environment.trainerRoute}?id=${trainerId}&money=${newMoney}`,'')
      .pipe(
        map((res: HttpResponse<number>) => {
          console.log(res.headers);
          return res.body;
        })
      );
  }

}
