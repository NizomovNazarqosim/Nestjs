import {IsNotEmpty, IsNumber} from 'class-validator';
import { FlatTypeEnum, RegionEnum, TypeEnum } from "./enums";

export interface RequestInterface {
    area_from: number;
    area_to:number;
    flat_type: FlatTypeEnum;
    floor_from: number;
    floor_to:number;
    floors_of_house: number;
    price_from: number;
    price_to: number;
    region: RegionEnum;
    rooms_from: number;
    rooms_to: number;
    type: TypeEnum;
}

export class CreateDto{
    @IsNumber()
    @IsNotEmpty()
    area_from: number;

    @IsNumber()
    @IsNotEmpty()
    area_to:number;

    @IsNotEmpty()
    flat_type: FlatTypeEnum;

    @IsNumber()
    @IsNotEmpty()
    floor_from: number;

    @IsNumber()
    @IsNotEmpty()
    floor_to:number;

    @IsNumber()
    @IsNotEmpty()
    floors_of_house: number;

    @IsNumber()
    @IsNotEmpty()
    price_from: number;

    @IsNumber()
    @IsNotEmpty()
    price_to: number;

    @IsNotEmpty()
    region: RegionEnum;

    @IsNumber()
    @IsNotEmpty()
    rooms_from: number;

    @IsNumber()
    @IsNotEmpty()
    rooms_to: number;

    @IsNotEmpty()
    type: TypeEnum;

}

