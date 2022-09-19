import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #EFE4A4;
`;
export const FormView = styled.View`
    margin-top: -20px;
    padding-bottom: 5px;
`;
export const Footer = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;
export const Question = styled.Text`
    color: #5F411D;
    font-size: ${RFValue(16)}px;
`;
export const Register = styled.Text`
    color: #9BA141;
    font-size: ${RFValue(16)}px;
    font-weight: 800;
`;