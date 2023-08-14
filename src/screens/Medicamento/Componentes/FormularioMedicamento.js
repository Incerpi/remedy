import React from 'react';
import {TextInput, StyleSheet, onChangeText, text, View} from 'react-native';

const formulario = () => {
    const [text, onChangeText] = React.useState('Nome');
}

export default function FormularioMedicamento(){
    return <>

        <View style={estilo.viewMedicamento}>
            <TextInput
                style={estilo.forms}
                onChangeText={onChangeText}
                value={text}
                placeholder='Nome do medicamento'/>

            <TextInput
                style={estilo.forms}
                onChangeText={onChangeText}
                value={text}
                placeholder='Dosagem (Mg)'
                keyboardType='numeric'/>

            <TextInput
                style={estilo.forms}
                onChangeText={onChangeText}
                value={text}
                placeholder='Data de Início'
                keyboardType='numeric'/>

    
            <TextInput
                style={estilo.forms}
                onChangeText={onChangeText}
                value={text}
                placeholder='Data de Término'
                keyboardType='numeric'/>

            <TextInput
                style={estilo.forms}
                onChangeText={onChangeText}
                value={text}
                placeholder='Hora'
                keyboardType='numeric'/>

            <TextInput
                style={estilo.forms}
                onChangeText={onChangeText}
                value={text}
                placeholder='Preço do Remédio'
                keyboardType='numeric'/>
        </View>
        
    </>

}

const estilo=StyleSheet.create({
    viewMedicamento: {
        marginTop: 40,
    },

    forms: {
        height: 40,
        margin: 16,
        borderWidth: 1,
        padding: 10,
    }
})