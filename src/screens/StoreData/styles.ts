import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #EFE4A4;
    padding-bottom: ${RFValue(50)}px;
`;
export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    color: #5F411D;
    font-weight: 400;
    margin-top: -20px;
    margin-bottom: 20px;
`;
export const FormView = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;
export const TwoForms = styled.View`
    width: ${RFValue(298)}px;
    flex-direction: row;
    justify-content: space-between;
`;
export const SmallForm = styled.View`
    width: ${RFValue(140)}px;
    height: ${RFValue(58)}px;
    align-items: flex-start;
    justify-content: center;
    background-color: #FFF;
    margin-bottom: ${RFValue(11)}px;
`;
export const Input = styled.TextInput`
    font-size: ${RFValue(18)}px;
    margin-left: ${RFValue(19)}px;
    width: ${RFValue(298)}px;
    height: ${RFValue(58)}px;
`;
