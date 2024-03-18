import { StyleSheet, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PublicProfileScreen from "../../screens/PublicProfileScreen";
import InformationIcon from "../../assets/svg/headerButtons/InformationIcon";
import Arrow from "../../assets/svg/headerButtons/Arrow";

const Stack = createStackNavigator();

const ProfileScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PublicProfileScreen"
        component={PublicProfileScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Pressable onPress={() => {}} style={styles.TopRightButtonsMargin}>
              <InformationIcon />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable onPress={() => {}} style={styles.TopLeftButtonsMargin}>
              <Arrow />
            </Pressable>
          ),
          headerTitle: "Profile",
          headerTitleStyle: styles.headerTitleStyle,
          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

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
});

export default ProfileScreenStack;
