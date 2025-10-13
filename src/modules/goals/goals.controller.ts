import { Controller, Get } from '@nestjs/common';
import GoalsService from './goals.service';

@Controller('goals')
//@UseGuards(JwtAuthGuard, RolesGuard)
export class GoalsController {
    constructor(private readonly goalService: GoalsService) { }

    @Get()
    async GetGoals()
    {
        return await this.goalService.GetGoals();
    }


}
