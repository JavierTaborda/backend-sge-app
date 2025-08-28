import {CanActivate, ExecutionContext,Injectable,UnauthorizedException,} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate{


    async canActivate(context: ExecutionContext): Promise<boolean> {
        console.log('Validando-----------------')
        return true;
    }


}