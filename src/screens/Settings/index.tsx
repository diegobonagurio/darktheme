import React, {useState, useCallback, useContext} from 'react';
import {SafeAreaView,Switch} from "react-native"

import {Context} from "../../context/dark"
import { Container } from './styles';

const Settings: React.FC = () => {

  const {dark} = useContext(Context)

  return (
    <SafeAreaView style={{flex: 1}}>
    <Container bgColor={dark}>

    
   </Container>
    </SafeAreaView>
  )
}

export default Settings;