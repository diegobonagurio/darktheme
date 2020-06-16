import styled from "styled-components/native"


interface ContainerProps {
  bgColor: Boolean
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background: ${({bgColor}) => bgColor ? '#7159c1' : '#191919'};
`;

