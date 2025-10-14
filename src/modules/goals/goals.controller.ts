import { Controller, Get } from '@nestjs/common';
import GoalsService from './goals.service';

@Controller('goals')
//@UseGuards(JwtAuthGuard, RolesGuard)
export class GoalsController {
    constructor(private readonly goalService: GoalsService) { }

    @Get()

    async GetGoals(role?: string, codven?: string, cod_ven?: string) {
    // async GetGoals(
    //     @CurrentUser('role') role: string,
    //     @CurrentUser('codven') codven: string,
    //     @Query('cod_ven') cod_ven?: string) {

        if (role === '4' || role === '5') {
            return await this.goalService.GetGoals(codven);
        }

        if (!cod_ven) {
            return await this.goalService.GetGoals();
        }

        return await this.goalService.GetGoals(cod_ven);
    }


}
