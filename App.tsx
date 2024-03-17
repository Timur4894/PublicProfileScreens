import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PublicProfileScreen from './screens/PublicProfileScreen';
import FontLoader from './constants/FontLoader';
import InformationIcon from './assets/svg/InformationIcon';
import Arrow from './assets/svg/Arrow';
import YourProfileScreen from './assets/svg/YourProfileScreen';
import LeadersScreen from './assets/svg/LeadersScreen';
import RiddlesScreen from './assets/svg/RiddlesScreen';
import { COLORS } from './constants/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 

const ProfileScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PublicProfileScreen"
        component={PublicProfileScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={styles.TopRightButtonsMargin}>
              <InformationIcon/>
            </View>
          ),
          headerLeft: () => (
            <View style={styles.TopLeftButtonsMargin}>
              <Pressable onPress={() => {}}>  
                <Arrow/>
              </Pressable>  
            </View>   
          ),
          headerTitle: 'Profile',
          headerTitleStyle: styles.headerTitleStyle,
          headerShadowVisible: false, 
        })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (    
      <FontLoader>
        <NavigationContainer>
          <StatusBar style='light'/>
          <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: COLORS.bottomTabsDefaultColor,
            tabBarLabelStyle: styles.labelStyle,
            }}>
            <Tab.Screen 
              name="Riddles" 
              component={ProfileScreen} 
              options={({ route }) => ({
                tabBarIcon: ({ color }) => {
                  const isActiveRoute = route.name === 'Riddles';
                  const iconColor = isActiveRoute ? color : COLORS.bottomTabsDefaultColor;
                  return <RiddlesScreen color={iconColor}/>;
                },
              })}
            />
            <Tab.Screen 
              name="Leaders" 
              component={ProfileScreen}  
              options={({ route }) => ({
                tabBarIcon: ({ color }) => {
                  const isActiveRoute = route.name === 'Leaders';
                  const iconColor = isActiveRoute ? color : COLORS.bottomTabsDefaultColor;
                  return <LeadersScreen color={iconColor}/>;
                },
              })}
              />
            <Tab.Screen 
              name="Profile"  
              component={ProfileScreen} 
              options={({ route }) => ({
                tabBarIcon: ({ color }) => {
                  const isActiveRoute = route.name === 'Profile';
                  const iconColor = isActiveRoute ? color : COLORS.bottomTabsDefaultColor;
                  return <YourProfileScreen color={iconColor}/>;
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
    marginLeft: 16
  },
  TopRightButtonsMargin: { 
    marginRight: 16
  },
  headerTitleStyle:{
    fontSize: 16,
    fontFamily: 'Nunito_700Bold'
  },
  labelStyle: {
    fontFamily: 'Nunito_700Bold'
  }
});
