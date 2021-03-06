import { Projection } from './projection';

export class Movie {
    id: number = 0;
    name: string = '';
    genre: string = '';
    description: string = '';
    projections: Projection[] = [];
}
