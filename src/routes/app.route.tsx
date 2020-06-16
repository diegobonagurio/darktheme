import React from "react"
import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator()

import Home from "../screens/Home"
import Settings from "../screens/Settings"

const Routes : React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen 
    name="Home" 
    component={Home} 
    options={{
      headerShown: false
    }}
    />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
)

export default Routes