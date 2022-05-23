export interface ResponseDto<T>{
    data : T,
    succeeded : boolean,
    errors : string[],
    message : string
}