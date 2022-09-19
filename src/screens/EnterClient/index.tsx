import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button } from '../../Components/Atoms/Button';
import { Logo } from '../../Components/Atoms/Logo';
import { Form } from '../../Components/Atoms/Form';

import {
    Container,
    FormView,
    Footer,
    Question,
    Register,
} from './styles';

export function EnterClient({ navigation }){
    return(
        <Container>
            <Logo />
            <FormView>
                <Form title='Telefone, e-mail ou login'/>
                <Form title='Digite sua senha' password={true}/>
            </FormView>
            <Button 
                title="Entrar"
                onPress={() => {}}
            />
            <Footer>
                <Question>Não tem uma conta?</Question>
                <TouchableOpacity onPress={() => navigation.navigate('ClientRegister')}>
                    <Register>Cadastre-se</Register>
                </TouchableOpacity>
            </Footer>
        </Container>
    );
}