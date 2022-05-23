import { BaseDto } from "./BaseDto";
import { ResponseDto } from "./ResponseDto";

export interface PaginationDto<T extends BaseDto> extends ResponseDto<T[]>{
    pageNumber : number,
    pageSize : number,
    totalPages : number,
    totalRecords : number
}