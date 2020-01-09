import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import Welcome from "./containers/Welcome/Welcome";
import {createAppContainer} from "react-navigation";
import Home from "./containers/Home/Home";
import {light, mapping} from "@eva-design/eva";
import {ApplicationProvider} from "@ui-kitten/components";


const stackNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },

}, {initialRouteName: 'Home'});


const RootStack = createStackNavigator({
    MainStack: {
      screen: stackNavigator,
    },
    WelcomeModal: {
      screen: Welcome,
    },
  }, {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'WelcomeModal',
  },
);

const NavigationContainer = createAppContainer(RootStack);

export default function App() {
  return (
    <>
      <ApplicationProvider mapping={mapping} theme={light}>
        <NavigationContainer/>
      </ApplicationProvider>
    </>
  )
};




