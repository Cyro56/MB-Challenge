import styled from 'styled-components/native';

export const StyledImage = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const FooterContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #ddd;
  border-radius: 33px 33px 0px 0px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const IconContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;
