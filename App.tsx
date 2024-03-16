import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PublicProfileScreen from './screens/PublicProfileScreen';
import InformationIcon from './components/svg/InformationIcon';
import Arrow from './components/svg/Arrow';
import FontLoader from './constants/FontLoader';
import Profile from './components/svg/Profile';
import Leaders from './components/svg/Leaders';
import Riddles from './components/svg/Riddles';

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
          <Tab.Navigator>
            <Tab.Screen name="Riddles" component={ProfileScreen} options={{ 
                headerShown: false ,
                tabBarActiveTintColor: 'black',
                tabBarIcon: () => (
                  <Riddles/>
                )
              }}/>
            <Tab.Screen name="Leaders" component={ProfileScreen} options={{ 
                headerShown: false ,
                tabBarActiveTintColor: 'black',
                tabBarIcon: () => (
                  <Leaders/>
                )
              }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ 
                headerShown: false ,
                tabBarActiveTintColor: 'black',
                tabBarIcon: () => (
                  <Profile/>
                )
              }}/>
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
});
