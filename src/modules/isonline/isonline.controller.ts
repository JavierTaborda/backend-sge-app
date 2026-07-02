import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('')
@ApiTags('Health')

export class IsOnlineController {
    @Get()
    @ApiOperation({ summary: 'Verifica que el backend esta en linea' })
    @ApiResponse({ status: 200, description: 'El backend esta en linea.' })
    async IsOnline(){

        return 'The Backend Is Online✅';
    }
}
