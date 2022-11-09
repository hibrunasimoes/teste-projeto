import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { ITraningByUser } from '../Models/Treinamento';

// const url = 'http://localhost:60743/home';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  constructor(private http: HttpClient) {}

    // listar(): Observable <ITraningByUser[]> {
    //   return this.http.get.<ITrainingByUser[]>();
    // }

}
