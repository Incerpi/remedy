import React from 'react';
import { StyleSheet , View, TouchableOpacity, Image, Dimensions} from 'react-native';

import casa from '../../assets/casa.png'
import categoria from  '../../assets/categoria.png'
import medicamento from '../../assets/medicamento.png'
import farmacia from  '../../assets/farmacia.png'
import config from '../../assets/config.png'

export default function Homebar(){
    return <>
        <View style={estilo.homebarView}>

            <TouchableOpacity>
                <Image source={medicamento} style={estilo.botaoMedicamento}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={categoria} style={estilo.botaoCategoria}/>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: "#293DF2", padding: 10, borderRadius: 10}}>
                <Image source={casa} style={estilo.botaoCasa}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={farmacia} style={estilo.botaoFarmacia}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={config} style={estilo.botaoConfig}/>
            </TouchableOpacity>

        </View>
    
    </>
}

const estilo=StyleSheet.create({
    homebarView: {
        width: "100%",
        backgroundColor: "#97E6FF",
        alignItems: "center",
        paddingVertical: 30,
        flexDirection: "row"
    },

    botaoCasa: {
        width: 40,
        height: 40,
    },

    botaoCategoria: {
        width: 40,
        height: 40,
        marginHorizontal: "16%",
        
    },

    botaoFarmacia: {
        width: 40,
        height: 40,
    },

    botaoMedicamento: {
        width: 40,
        height: 40
    },

    botaoConfig: {
        width: 40,
        height: 40,
    }

})