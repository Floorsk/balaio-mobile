import React from 'react';

import { Button } from '../../Components/Atoms/Button';
import { Logo } from '../../Components/Atoms/Logo';

import {
    Container,
    Title,
    ButtonView
} from './styles';

export function Register({ navigation }){
    return(
        <Container>
            <Logo/>
            <Title>Deseja cadastrar como: </Title>
            <ButtonView>
                <Button title="Cliente" onPress={() => navigation.navigate('ClientRegister')}/>
                <Button title="Vendedor" onPress={() => navigation.navigate('SellerRegister')}/>
            </ButtonView>
        </Container>
    );
}