import { create } from 'zustand'
import { Game } from '../api/games'

const useFavoritesStore = create((set) => ({
    games: [],
    add: (game: Game) => set((state) => ({ games: [game, ...state.games] })),
    remove: ({ id }: Game) => set((state) => ({ games: state.games.filter((game: Game) => game.id !== id) })),
}))

export default useFavoritesStore