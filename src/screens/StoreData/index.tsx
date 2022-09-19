import React from 'react';
import { Button } from '../../Components/Atoms/Button';
import { Form } from '../../Components/Atoms/Form';

import { LogoTinier } from '../../Components/Atoms/LogoTinier';

import {
    Container,
    Title,
    FormView,
    TwoForms,
    SmallForm,
    Input
} from './styles';

export function StoreData({ navigation }){
    return(
        <Container>
            <LogoTinier />
            <Title>Sobre a loja: </Title>
            <FormView>
                <Form title='Nome'/>
                <Form title='CNPJ' type='numeric'/>
                <Form title='Endereço'/>
                <TwoForms>
                    <SmallForm >
                        <Input
                            placeholder={'Cidade'}
                            placeholderTextColor={'#A8A7A7'}
                        />
                    </SmallForm>
                    <SmallForm >
                        <Input
                            placeholder={'Estado'}
                            placeholderTextColor={'#A8A7A7'}
                        />
                    </SmallForm>
                </TwoForms>
                <TwoForms>
                    <SmallForm>
                        <Input
                            placeholder={'Dias'}
                            placeholderTextColor={'#A8A7A7'}
                            keyboardType={'numeric'}
                        />
                    </SmallForm>
                    <SmallForm>
                        <Input
                            placeholder={'Horários'}
                            placeholderTextColor={'#A8A7A7'}
                            keyboardType={'numeric'}
                        />
                    </SmallForm>
                </TwoForms>
            </FormView>
            <Button title='Continuar' onPress = {() => navigation.navigate('Benefits')}/>
        </Container>
    );
}