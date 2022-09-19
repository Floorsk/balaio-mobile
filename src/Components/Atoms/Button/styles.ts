import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    width: ${RFValue(298)}px;
    height: ${RFValue(49)}px;
    background-color: #9BA141;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(24.5)}px;
`;
export const Title = styled.Text`
    color: #FFF;
    font-size: ${RFValue(24)}px;
    font-weight: 300;
`;