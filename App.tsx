import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PublicProfileScreen from './screens/PublicProfileScreen';
import InformationIcon from './components/svg/InformationIcon';
import Arrow from './components/svg/Arrow';
import FontLoader from './constants/ FontLoader';

const Stack = createStackNavigator();

export default function App() {
  return (
    <FontLoader>
      <NavigationContainer>
        <StatusBar style='light'/>
        <Stack.Navigator initialRouteName="PublicProfileScreen">
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
