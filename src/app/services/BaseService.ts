import { HttpClient } from "@angular/common/http";
import { Serializer } from "@angular/compiler";
import { map, Observable } from "rxjs";
import { BaseDto } from "../interfaces/BaseDto";
import { PaginationDto } from "../interfaces/PaginationDto";
import { ResponseDto } from "../interfaces/ResponseDto";

export class BaseAPIService<T extends BaseDto> {
    constructor(
        private httpClient: HttpClient,
        private url: string,
        private endpoint: string) {}
    
      public create(item: T): Observable<ResponseDto<T>> {
        return this.httpClient
          .post<T>(`${this.url}/${this.endpoint}`, JSON.stringify(item))
          .pipe(map(data => JSON.parse(JSON.stringify(data)) as ResponseDto<T>));
      }
    
      public update(item: T): Observable<ResponseDto<T>> {
        return this.httpClient
          .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
          JSON.stringify(item))
          .pipe(map(data => JSON.parse(JSON.stringify(data)) as ResponseDto<T>));
      }
    
      public read(id: number): Observable<ResponseDto<T>> {
        return this.httpClient
          .get(`${this.url}/${this.endpoint}/${id}`)
          .pipe(map((data: any) => JSON.parse(JSON.stringify(data)) as ResponseDto<T>));
      }
    
      public list(queryOptions: any): Observable<ResponseDto<T[]>> {
        let params = new URLSearchParams();
        for(let key in queryOptions){
            params.set(key, queryOptions[key]) 
        }
        return this.httpClient
          .get(`${this.url}/${this.endpoint}?${params?.toString()}`)
          .pipe(map((data: any) => JSON.parse(JSON.stringify(data)) as ResponseDto<T[]>));
      }

      public listPaginated(queryOptions: any): Observable<PaginationDto<T>> {
        let params = new URLSearchParams();
        for(let key in queryOptions){
            params.set(key, queryOptions[key]) 
        }
        return this.httpClient
          .get(`${this.url}/${this.endpoint}?${params.toString()}`)
          .pipe(map((data: any) => JSON.parse(JSON.stringify(data)) as PaginationDto<T>));
      }
    
      public delete(id: number) {
        return this.httpClient
          .delete(`${this.url}/${this.endpoint}/${id}`);
      }
}