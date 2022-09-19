import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #EFE4A4;
`;
export const Question = styled.Text`
    font-size: ${RFValue(18)}px;
    color: #5F411D;
`;
export const FormView = styled.View`
    margin: 34px;
`;
export const Footer = styled.View`
    align-items: center;
    justify-content: center;
    margin: 12.5px;
`;
export const Register = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: 800;
    color: #9BA141;
`;