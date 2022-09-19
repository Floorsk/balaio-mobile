import React from "react";
import { TouchableOpacity } from "react-native";

import { Button } from "../../Components/Atoms/Button";
import { Form } from "../../Components/Atoms/Form";
import { LogoTinier } from "../../Components/Atoms/LogoTinier";

import {
    Container,
    Question,
    FormView,
    Footer,
    Register,
} from './styles';

export function SellerRegister({ navigation }){
    return(
        <Container>
            <LogoTinier/>
            <Question>Sobre o dono{'('}a{')'} da loja: </Question>
            <FormView>
                <Form title='Telefone ou e-mail'/>
                <Form title='Nome completo'/>
                <Form title='CPF' type={'numeric'}/>
            </FormView>
            <Button title='Continuar' onPress={() => navigation.navigate('StoreData')}/>
            <Footer>
                <Question style={{fontSize: 18}}>Já possui uma conta?</Question>
                <TouchableOpacity>
                    <Register>Entre aqui</Register>
                </TouchableOpacity>
            </Footer>
        </Container>
    );
}