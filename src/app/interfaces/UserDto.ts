import { BaseDto } from "./BaseDto";

export interface UserDto extends BaseDto {
    firstName: string;
    lastName: string;
    age: number;
}