import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Button } from '../../Components/Atoms/Button';
import { Form } from '../../Components/Atoms/Form';
import { LogoTinier } from '../../Components/Atoms/LogoTinier';

import {
    Container,
    FormView,
    Footer,
    Question,
    Register
} from './styles';

export function ClientRegister({ navigation }){
    return(
        <Container>
            <LogoTinier/>
            <FormView>
                <Form title='Telefone ou e-mail'/>
                <Form title='Nome Completo'/>
                <Form title='CEP'/>
                <Form title='Nome de usuário'/>
                <Form title='Senha'/>
            </FormView>
            <Button title='Finalizar Cadastro'/>
            <Footer>
                <Question>Não tem uma conta?</Question>
                <TouchableOpacity onPress={() => navigation.navigate('EnterClient')}>
                    <Register>Entre aqui</Register>
                </TouchableOpacity>
            </Footer>
        </Container>
    );
}