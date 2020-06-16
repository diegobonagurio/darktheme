import React from "react"
import {NavigationContainer} from "@react-navigation/native"

import App from "./app.route";

const Router: React.FC = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
)

export default Router