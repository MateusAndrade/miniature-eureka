import React from "react";
import Icons from "@expo/vector-icons/AntDesign";
import { StyleSheet } from "react-native";
import { useShallow } from "zustand/react/shallow";

import { TouchableOpacity } from "react-native";
import useFavoritesStore from "../store";
import { Game } from "../api/games";

interface FavoriteButtonProps {
  game: Game;
}

const FavoriteButton = ({ game }: FavoriteButtonProps) => {
  const { add, remove, games } = useFavoritesStore((state) => state);

  const isFavorite = games.some(({ id }: Game) => game.id === id);

  const icon = isFavorite ? "heart" : "hearto";

  const onPress = () => {
    if (isFavorite) {
      remove(game);
    } else {
      add(game);
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
