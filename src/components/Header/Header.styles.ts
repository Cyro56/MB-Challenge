import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  background-color: #4876ee;
  height: 150px;
  padding: 10px 0;
  border-radius: 0px 0px 33px 33px;
`;

export const HeaderTitleContainer = styled.View`
  align-items: center;
`;

export const HeaderTitleText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  padding: 0 20px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  padding-left: 10px;
`;
