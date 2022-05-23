import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { ResponseDto } from "../interfaces/ResponseDto";
import { SubResourceBaseDto } from "../interfaces/SubResourceBaseDto";

export class SubResourceBaseService<T extends SubResourceBaseDto> {
    constructor(
      private httpClient: HttpClient,
      private url: string,
      private parentEndpoint: string,
      private endpoint: string) {  }
  
    public create(item: T): Observable<ResponseDto<T>> {
    return this.httpClient
      .post<T>(`${this.url}/${this.parentEndpoint}/${item.parentId}/${this.endpoint}`,
      JSON.stringify(item))
      .pipe(map((data: any) => JSON.parse(JSON.stringify(data)) as ResponseDto<T>));
    }
  
    public update(item: T): Observable<ResponseDto<T>> {
      return this.httpClient
        .put<T>(`${this.url}/${this.parentEndpoint}/${item.parentId}/${this.endpoint}/${item.id}`,
        JSON.stringify(item))
        .pipe(map(data => JSON.parse(JSON.stringify(data)) as ResponseDto<T>));
    }
  
    read(parentId: number, id: number): Observable<ResponseDto<T>> {
      return this.httpClient
        .get(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}/${id}`)
        .pipe(map((data: any) => JSON.parse(JSON.stringify(data)) as ResponseDto<T>));
      }
  
    list(parentId: number, queryOptions: any): Observable<ResponseDto<T>> {
        let params = new URLSearchParams();
        for(let key in queryOptions){
            params.set(key, queryOptions[key]) 
        }
        return this.httpClient
        .get(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}?${queryOptions?.toQueryString()}`)
        .pipe(map((data: any) => JSON.parse(JSON.stringify(data)) as ResponseDto<T>));
      }
  
    delete(parentId: number, id: number) {
      return this.httpClient
        .delete(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}/${id}`);
    }
  }