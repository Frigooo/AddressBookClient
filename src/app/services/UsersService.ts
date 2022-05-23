import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PaginationDto } from "../interfaces/PaginationDto";
import { UserDto } from "../interfaces/UserDto";
import { BaseAPIService } from "./BaseService";

@Injectable()
export class UsersService extends BaseAPIService<UserDto> {
    private readonly baseUrl = environment.API_URL;

    constructor(httpClient: HttpClient) {
        super(
          httpClient,
          environment.API_URL,
          'user');
      }

    getUsers(pageNumber : number, pageSize : number) : Observable<PaginationDto<UserDto>> {
        debugger
        return this.listPaginated({pageNumber, pageSize});
      }

}