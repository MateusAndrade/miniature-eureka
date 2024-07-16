import React from "react";
import { FlatList, Text, View } from "react-native";
import { Game } from "../api/games";
import { GameCard } from "../components/GameCard";
import useFavoritesStore from "../store";

const ListEmptyComponent = () => {
  return (
    <View>
      <Text>No favorites! Add some games to your favorites list.</Text>
    </View>
  );
};

function Favorites() {
  const { games } = useFavoritesStore((state) => state);

  return (
    <View style={{ padding: 10 }}>
      <FlatList<Game>
        data={games || []}
        renderItem={({ item }) => <GameCard game={item} />}
        ListEmptyComponent={<ListEmptyComponent />}
      />
    </View>
  );
}

export default Favorites;
