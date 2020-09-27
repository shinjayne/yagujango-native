import React from 'react';
import 'react-native-gesture-handler';
import Welcome from "./containers/Welcome/Welcome";
import Home from "./containers/Home/Home";
import {light, mapping} from "@eva-design/eva";
import {ApplicationProvider} from "@ui-kitten/components";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";


const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <ApplicationProvider mapping={mapping} theme={light}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={'Home'}
              component={Home}
              options={{title: 'Home'}}
            />
            <Stack.Screen
              name={'Welcome'}
              component={Welcome} options={{title: 'Welcome'}}/>
          </Stack.Navigator>
        </NavigationContainer>
        {/*<NavigationContainer/>*/}
      </ApplicationProvider>
    </>
  )
};




