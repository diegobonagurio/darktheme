import 'react-native-gesture-handler';
import React from 'react';

// import { Container } from './styles';
import DarkContext from "./src/context/dark"

import Routes from "./src/routes"
const App: React.FC = () => {
  return (
   <DarkContext>
      <Routes />
   </DarkContext>
  )
}

export default App;