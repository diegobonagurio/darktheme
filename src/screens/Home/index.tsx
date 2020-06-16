import React, {useState, useCallback, useContext} from 'react';
import {SafeAreaView,Switch} from "react-native"

import {useNavigation} from "@react-navigation/native"
import {Context} from "../../context/dark"
import { Container,Wrapper, ButtonNavigate, Label, Header } from './styles';

const Home: React.FC = () => {

  const {dark, handleChangeTheme} = useContext(Context)
  const [toggle, setToggle] = useState(false)
  const navigation = useNavigation()

  const handleChangeToggle = useCallback(() => {
    setToggle(prevState => !prevState)
    handleChangeTheme()
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
    <Container bgColor={dark}>

    <Header>
      <Switch 
        value={toggle}
        onValueChange={handleChangeToggle}
        thumbColor="#fff"
      />
    </Header>
    <Wrapper>
      <ButtonNavigate onPress={() => navigation.navigate("Settings")}>
        <Label textColor={dark}>Navegar</Label>
      </ButtonNavigate>
   </Wrapper>
   </Container>
    </SafeAreaView>
  )
}

export default Home;