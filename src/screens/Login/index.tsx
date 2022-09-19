import React from 'react';

import { Button } from '../../Components/Atoms/Button';
import { Logo } from '../../Components/Atoms/Logo';

import {
    Container,
    ButtonView
} from './styles';

export function Login({ navigation }){
    return(
        <Container>
            <Logo/>
            <ButtonView>
                <Button title="Entrar" onPress={() => navigation.navigate('Enter')}/>
                <Button title="Cadastro" onPress={() => navigation.navigate('Register')}/>
            </ButtonView>
        </Container>
    );
}