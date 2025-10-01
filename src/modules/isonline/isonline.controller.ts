import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('')

export class IsOnlineController {
    @Get()
    async IsOnline(){

        return 'The Backend Is Online✅';
    }
}
