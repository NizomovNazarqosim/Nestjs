import { AppwriteService } from './service/appwrite.service';
import { ConfigService } from './service/config.service';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import {APP_FILTER} from '@nestjs/core';
import { AllExceptionsFilter } from './error-handler/all-exception.filter';
import { OlxModule } from './olx/olx.module';

@Module({
  imports: [
    ServeStaticModule.forRootAsync({
      useFactory: async (configService: ConfigService) => [
        ...(configService.globalConfig.staticPath && [
          { rootPath: configService.globalConfig.staticPath },
        ]),
      ],
      extraProviders: [ConfigService],
      inject: [ConfigService],
    }),
    OlxModule
  ],
  providers: [AppwriteService, ConfigService,
  {
    provide: APP_FILTER,
    useClass: AllExceptionsFilter
  },
  ],
})

export class AppModule {}

