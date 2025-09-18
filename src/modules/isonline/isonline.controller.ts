import { Controller, Get } from '@nestjs/common';

@Controller('isonline')
export class IsOnlineController {
    @Get()
    async IsOnline(){
        return 'The Backend Is Online✅';
    }
}
