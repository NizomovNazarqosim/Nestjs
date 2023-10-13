import { Controller, Get, Post, Body } from "@nestjs/common";
import { OlxService } from "./olx.service";

import { Observable } from "rxjs";
import { CreateDto } from "./dtos/createDto";

@Controller()
export class OlxController {
    constructor(private readonly olxSerivice: OlxService) {}
    
    @Post('/api/v1/olx_parse')
    create(@Body() requestBody: CreateDto): any{
        return this.olxSerivice.create(requestBody)
    }
}