import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: ${RFValue(298)}px;
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

