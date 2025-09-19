import { Controller, Get } from '@nestjs/common';

@Controller('')
export class IsOnlineController {
    @Get()
    async IsOnline(){
        return 'The Backend Is Online✅';
    }
}
