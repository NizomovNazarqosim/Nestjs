import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpStatus,
    HttpException,
  } from '@nestjs/common';
  import { Response, Request } from 'express';
  import {
    HttpExceptionResponse,
  } from './models/http-exception-response.interface';
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
  
      let status: HttpStatus;
      let errorMessage: string;
  
      if (exception instanceof HttpException) {
        status = exception.getStatus();
        const errorResponse = exception.getResponse();
  
        errorMessage =exception?.message ||
          (errorResponse as HttpExceptionResponse).error
      } else {
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        errorMessage = 'Critical internal server error';
      }

      console.log(exception)

      response.status(status).json({
        statusCode: status || 400,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: errorMessage
      })
  
    }
  }
  