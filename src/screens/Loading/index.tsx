import React from 'react';
import { Logo } from '../../Components/Atoms/Logo';

import {
    Container,
} from './styles';

export function Loading({ navigation }){
    return(
        <Container onPress={() => navigation.navigate('Login')}>
            <Logo/>
        </Container>
    );
}