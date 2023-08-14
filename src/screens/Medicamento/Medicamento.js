import React from 'react';
import {StyleSheet} from 'react-native';

import Topo from '../Medicamento/Componentes/TopoMedicamento';
import Formulario from './Componentes/FormularioMedicamento';
import Botao from '../../../src/Componentes/Botao';


const formulario = () => {
    const [text, onChangeText] = React.useState('Nome');
}

export default function Medicamento(){
    return <>
        <Topo/>
        <Formulario/>
        <Botao/>
        </>

}

const estilo=StyleSheet.create({
    forms: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})