import { Movie } from './movie';
import { Room } from './room';

export class Projection {
    id: number = 0;
    movie: Movie = new Movie();
    room: Room = new Room();
    projectionDate: Date = new Date();
}
