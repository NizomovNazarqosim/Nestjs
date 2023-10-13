import { Injectable } from "@nestjs/common";
import { CreateDto } from "./dtos/createDto";
import {HttpService} from '@nestjs/axios'
import {map} from 'rxjs/operators'



@Injectable()
export class OlxService{
    constructor(private readonly httpService: HttpService) {}

    async create(body: CreateDto): Promise<any>{
        const url = 'https://www.olx.uz/api/v1/offers/?offset=40&limit=40&category_id=1511&currency=UZS&filter_enum_furnished%5B0%5D=yes&filter_refiners=&sl=18a18198c64x162fdf69'
        let proxy:any = await this.httpService.get(url).pipe(
            map((response) => response.data)
        )
        

        return proxy
    } 
}