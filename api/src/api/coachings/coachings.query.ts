import { CategoryDTO } from '../categories/category.dto';

export interface CoachingQuery {
    title?: string;
    rating?: number;
    limit?: string;
    categories?: string[];
    imageUrl?: string;
}
