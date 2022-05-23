import { BaseDto } from "./BaseDto";

export interface SubResourceBaseDto extends BaseDto{
    parentId?: number;
}