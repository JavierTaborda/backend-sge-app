import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response } from 'express';

@Catch()
export  class AllExeptionsFilter implements ExceptionFilter{

    catch(exception: any, host: ArgumentsHost) {
        const ctx=host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status =exception instanceof HttpException ? exception.getStatus():500;
        const message=exception.message || 'Internal server error';

        response.status(status).json({statusCode: status,message});
        console.log(exception)
    }
}