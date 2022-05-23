import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ResponseDto } from "../interfaces/ResponseDto";
import { UserAddressDto } from "../interfaces/UserAddressDto";
import { SubResourceBaseService } from "./SubResourceBaseService";

@Injectable()
export class UserAddressService extends SubResourceBaseService<UserAddressDto> {
    private readonly baseUrl = environment.API_URL;

    constructor(httpClient: HttpClient) {
        super(
          httpClient,
          environment.API_URL,
          'user',
          'address');
      }

    getUserAddress(userId : number) : Observable<ResponseDto<UserAddressDto>> {
        debugger
        return this.list(userId, null);
      }
}