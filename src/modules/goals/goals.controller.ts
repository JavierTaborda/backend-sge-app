import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import GoalsService from './goals.service';

@Controller('goals')
@UseGuards(JwtAuthGuard, RolesGuard)
export class GoalsController {
    constructor(private readonly goalService: GoalsService) { }

    //@Get(':cod_vend')
    @Get('')
    async GetGoals(
        @CurrentUser('role') role: string,
        @CurrentUser('codven') codven: string,
        @Query('cod_ven') cod_ven?: string

    ) { 
        //console.log(cod_ven)
        if (role === '4' || role === '5') {
            return await this.goalService.GetGoals(codven);
        }

        if (!cod_ven || cod_ven.length === 0) {
            return await this.goalService.GetGoals();
        }
       

    
        return await this.goalService.GetGoals(cod_ven);
    }

    @Get('sellers')
    async GetArticulos(codven?: string) {
        return await this.goalService.GetSellers();
    }


}
