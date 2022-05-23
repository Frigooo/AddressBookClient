import { SubResourceBaseDto } from "./SubResourceBaseDto";

export interface UserAddressDto extends SubResourceBaseDto{
    country : string,
    city : string,
    street : string,
    postalCode : string
}