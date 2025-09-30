import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('')
@UseGuards(AuthGuard('jwt'))
export class IsOnlineController {
    @Get()
    async IsOnline(@Req() req){
        const { role, codven } = req.user;
        return 'The Backend Is Online✅' + codven;
    }
}
