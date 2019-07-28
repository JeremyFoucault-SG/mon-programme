import { ArgumentsHost, Catch, HttpStatus, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { EntityException, EntityExceptionCode } from '../exceptions/entity-exception';

@Catch(EntityException)
export class EntityExceptionFilter extends HttpException {
  catch(exception: EntityException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    switch (exception.code) {
      case EntityExceptionCode.NOT_FOUND:
        response
          .status(HttpStatus.NOT_FOUND)
          .json({
            statusCode: exception.code,
            message: exception.message,
            timestamp: new Date().toISOString(),
            path: request.url,
          });
        break;
      default:
        response
          .status(HttpStatus.NOT_IMPLEMENTED)
          .json({
            statusCode: exception.code,
            message: exception.message,
            timestamp: new Date().toISOString(),
            path: request.url,
          });
        break;
    }
  }
}
