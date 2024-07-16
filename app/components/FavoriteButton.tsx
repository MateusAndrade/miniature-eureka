import React from "react";
import Icons from "@expo/vector-icons/AntDesign";
import { StyleSheet } from "react-native";
import { useShallow } from "zustand/react/shallow";

import { TouchableOpacity } from "react-native";
import useFavoritesStore from "../store";
import { Game } from "../api/games";

interface FavoriteButtonProps {
  gameId: number;
}

const FavoriteButton = ({ gameId }: FavoriteButtonProps) => {
  const { games, add, remove } = useFavoritesStore((state) => state);

  console.log("games", games);

  const isFavorite = games.find((game: Game) => game.id === gameId);

  console.log("isFavorite", isFavorite);

  const icon = isFavorite ? "heart" : "hearto";

  const onPress = () => {
    if (isFavorite) {
      remove(gameId);
    } else {
      add(gameId);
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icons name={icon} size={32} color="red" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export { FavoriteButton };
