import React from 'react';
import { TextInput } from 'react-native';

import {
    Container,
    Input
} from './styles';

interface Props extends TextInput{
    title: string;
    password: boolean;
    type: 'numeric';
}

export function Form({
    title,
    password,
    type
} : Props){
    return(
        <Container>
            <Input
                placeholder={title}
                placeholderTextColor={'#A8A7A7'}
                secureTextEntry={password}
                keyboardType={type}
            />  
        </Container>
    );
}