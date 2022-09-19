import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #EFE4A4;
`;
export const ButtonView = styled.View`
    height: ${RFValue(125)}px;
    align-items: center;
    justify-content: space-between;
`;