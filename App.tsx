import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontLoader from "./constants/FontLoader";
import YourProfileScreen from "./assets/svg/tabBarButtons/YourProfileScreen";
import LeadersScreen from "./assets/svg/tabBarButtons/LeadersScreen";
import RiddlesScreen from "./assets/svg/tabBarButtons/RiddlesScreen";
import { COLORS } from "./constants/Colors";
import ProfileScreenStack from "./components/stacks/ProfileScreenStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <FontLoader>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: COLORS.bottomTabsDefaultColor,
            tabBarLabelStyle: styles.labelStyle,
            tabBarStyle: { borderTopColor: COLORS.noRewardsBorderColor },
          }}
        >
          <Tab.Screen
            name="Riddles"
            component={ProfileScreenStack}
            options={({ route }) => ({
              tabBarIcon: ({ color }) => {
                const isActiveRoute = route.name === "Riddles";
                const iconColor = isActiveRoute
                  ? color
                  : COLORS.bottomTabsDefaultColor;
                return <RiddlesScreen color={iconColor} />;
              },
            })}
          />
          <Tab.Screen
            name="Leaders"
            component={ProfileScreenStack}
            options={({ route }) => ({
              tabBarIcon: ({ color }) => {
                const isActiveRoute = route.name === "Leaders";
                const iconColor = isActiveRoute
                  ? color
                  : COLORS.bottomTabsDefaultColor;
                return <LeadersScreen color={iconColor} />;
              },
            })}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreenStack}
            options={({ route }) => ({
              tabBarIcon: ({ color }) => {
                const isActiveRoute = route.name === "Profile";
                const iconColor = isActiveRoute
                  ? color
                  : COLORS.bottomTabsDefaultColor;
                return <YourProfileScreen color={iconColor} />;
              },
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  TopLeftButtonsMargin: {
    marginLeft: 16,
  },
  TopRightButtonsMargin: {
    marginRight: 16,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontFamily: "Nunito_700Bold",
  },
  labelStyle: {
    fontFamily: "Nunito_700Bold",
  },
});
