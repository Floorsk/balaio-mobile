import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #EFE4A4;
`;
export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    font-weight: 300;
    color: #5F411D;
    margin-top: ${RFValue(-18)}px;
    margin-bottom: ${RFValue(40)}px;
`;
export const ButtonView = styled.View`
    height: ${RFValue(125)}px;
    align-items: center;
    justify-content: space-between;
`;