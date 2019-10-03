import * as faker from 'faker/locale/fr';
import { GoalsService } from '../src/api/goals/goals.service';
import { GoalDTO } from '../src/api/goals/goal.dto';

export async function insertGoalData(goalsService: GoalsService) {
    // populate mongo
    for (let i = 1; i <= 50; i++) {
        const goalDTO: GoalDTO = { };
        await goalsService.insert(goalDTO);
    }
}
