import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Topo(){
    return <>
        <View style={estilo.topo}>
            <Text style={estilo.titulo}>Cadastrar Medicamento</Text>
        </View>
    </>
}

const estilo = StyleSheet.create({
    titulo: {
        width: "100%",
        color: "#293DF2",
        position: "absolute",
        textAlign: "center",
        fontSize: 30,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16,
        marginVertical: 50
    },

    topo: {
        width: "100%",
        backgroundColor: "#97E6FF",
        alignItems: "center",
        paddingVertical: 60,
        }
})