import { Module } from "@nestjs/common";
import { OlxController } from "./olx.controller";
import { OlxService } from "./olx.service";
import {HttpModule} from '@nestjs/axios';


@Module({
    imports: [HttpModule],
    controllers:[OlxController],
    providers:[OlxService],
})

export class OlxModule {};