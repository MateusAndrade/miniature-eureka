import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Games from "./Games";
import Favorites from "./Favorites";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <NavigationContainer independent>
    <Tab.Navigator>
      <Tab.Screen name="Games" component={Games} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default TabNavigator;
