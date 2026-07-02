import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import GoalsService from './goals.service';

@Controller('goals')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('Goals')
@ApiBearerAuth()
export class GoalsController {
    constructor(private readonly goalService: GoalsService) { }

    //@Get(':cod_vend')
    @Get('')
    @ApiOperation({ summary: 'Obtiene metas de ventas' })
    @ApiQuery({ name: 'cod_ven', required: false, description: 'Codigo del vendedor a consultar' })
    @ApiResponse({ status: 200, description: 'Metas disponibles segun rol o vendedor indicado.' })
    async GetGoals(
        @CurrentUser('role') role: string,
        @CurrentUser('codven') codven: string,
        @Query('cod_ven') cod_ven?: string

    ) { 

        if (role === '4' || role === '5') {
            return await this.goalService.GetGoals(codven);
        }

        if (!cod_ven || cod_ven.length === 0) {
            return await this.goalService.GetGoals();
        }
       

    
        return await this.goalService.GetGoals(cod_ven);
    }

    @Get('sellers')
    @ApiOperation({ summary: 'Lista vendedores disponibles para metas' })
    @ApiResponse({ status: 200, description: 'Vendedores disponibles para consulta de metas.' })
    async GetArticulos(codven?: string) {
        return await this.goalService.GetSellers();
    }


}
