import React from 'react';
import { Button } from '../../Components/Atoms/Button';
import { Logo } from '../../Components/Atoms/Logo';

import {
    Container,
    Title,
    ButtonView
} from './styles';

export function Enter({ navigation }){
    return(
        <Container>
            <Logo/>
            <Title>Deseja entrar como: </Title>
            <ButtonView>
                <Button title="Cliente" onPress={() => navigation.navigate('EnterClient')}/>
                <Button title="Vendedor"/>
            </ButtonView>
        </Container>
    );
}