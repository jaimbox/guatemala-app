import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PromotionModel } from 'src/app/shared/models/Promotion';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
    basePath = `http://${environment.ipAddress}:8000/api/promotions`;

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
