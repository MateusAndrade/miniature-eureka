import React from "react";
import { Button, Image, Text, View, StyleSheet } from "react-native";

import { Game } from "../api/games";

import { FavoriteButton } from "./FavoriteButton";
import { useNavigation } from "@react-navigation/native";

const HEIGHT = 100;

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const navigation = useNavigation();

  const goToDetails = () => {
    navigation.navigate("Details", { game });
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.content}>
          <Image
            style={styles.icon}
            source={{ uri: game.iconURL }}
            width={50}
            height={50}
          />
          <View style={styles.body}>
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.title}>{game.rating}</Text>
          </View>
        </View>
        <View>
          <FavoriteButton game={game} />
        </View>
      </View>
      <View>
        <Button color="blue" onPress={goToDetails} title="Details" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
  },
  container: {
    flexDirection: "column",
    height: HEIGHT,
  },
  content: {
    flexDirection: "row",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
  },
});

export { GameCard };
