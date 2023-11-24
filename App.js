import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Home, Search, CourseListing } from './screens';


const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

const App = () => {

  const [fontsLoaded, fontError] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
		'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
		'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });
	
	const onLayoutRootView = async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	};
	
	useEffect(() => {
		onLayoutRootView();
	}, [fontsLoaded, fontError]);

	if (fontError) {
		console.error('Error loading fonts:', fontError);
		return null;
	}

	if (!fontsLoaded) {
		return null; 
	}

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
		    <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
        <Stack.Screen name="CourseListing" component={CourseListing} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
