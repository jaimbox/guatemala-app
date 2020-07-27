import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { PromotionModel } from 'src/app/shared/models/Promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
    basePath = 'http://192.168.100.8:8000/api/promotions';

    constructor(public http: HttpClient) { }

    getList(page: number = 1): Observable<PromotionModel.PromotionResponse> {
        return this.http.get<PromotionModel.PromotionResponse>(`${this.basePath}?page=${page}`)
            .pipe(map(response => {
                return response;
            }));
    }

    getPromotionDetail(id: number): Observable<PromotionModel.PromotionSingleResponse> {
        return this.http.get<PromotionModel.PromotionSingleResponse>(`${this.basePath}/${id}` )
            .pipe(map(response => {
                return response;
            }));
    }
}
