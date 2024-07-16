import { request } from "./request";

const ENTITY_URL = "games";

export interface Game {
    userId: number
    id: number
    title: string
    iconURL: string
    rating: number;
}


export const getGames = async (): Promise<Game[]> => await request(ENTITY_URL);

export const getGameDetail = async (id: string): Promise<Game> => await request(`${ENTITY_URL}/${id}`);
