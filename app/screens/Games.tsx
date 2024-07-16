import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

import { Game, getGames } from "../api/games";
import { GameCard } from "../components/GameCard";

type ListEmptyComponentProps = {
  isPending: boolean;
};

const ListEmptyComponent = ({ isPending }: ListEmptyComponentProps) => {
  if (isPending) {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <ActivityIndicator />
      </View>
    );
  }

  return null;
};

const Games = () => {
  const { data, isPending } = useQuery({
    queryKey: ["games"],
    queryFn: getGames,
  });

  return (
    <View style={{ padding: 10 }}>
      <FlatList<Game>
        data={data || []}
        renderItem={({ item }) => <GameCard game={item} />}
        ListEmptyComponent={<ListEmptyComponent isPending={isPending} />}
      />
    </View>
  );
};

export default Games;
