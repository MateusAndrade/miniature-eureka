import { create } from 'zustand'

const useFavoritesStore = create((set) => ({
    games: [],
    add: (game: any) => set((state) => ({ games: [game, ...state.games] })),
    remove: (id: any) => set((state) => ({ games: state.games.filter((game: any) => game.id !== id) })),
}))

export default useFavoritesStore