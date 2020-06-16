import styled from "styled-components/native"


interface ContainerProps {
  bgColor: Boolean
}

interface LabelProps {
  textColor: Boolean
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background: ${({bgColor}) => bgColor ? '#7159c1' : '#191919'};

`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const  ButtonNavigate = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8
}))`
  height: 45px;
  background: #fff;
  width: 90%;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`
export const  Label = styled.Text<LabelProps>`
  font-size: 18px;
  color: ${({textColor}) => textColor ? '#7159c1' : '#191919'};
`

export const Header = styled.View`
  margin-top: 50px;
`