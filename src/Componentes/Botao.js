import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function Botao(){
    return <>
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Salvar</Text>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    botao:{
        width: "30%",
        marginTop: 18,
        backgroundColor: "#293DF2",
        paddingVertical: 5,
        marginLeft: "35%",
        borderRadius: 6
    },

    textoBotao:{
        color: "#FFFFFF",
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})