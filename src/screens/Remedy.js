import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import Medicamento from './Medicamento/Medicamento';
import Homebar from '../Componentes/Homebar';

export default function Remedy(){
    return <>
        <ScrollView>
            <Medicamento/>
        </ScrollView>
        <Homebar/>
       
    </>
}