import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function ItemOngList( {categoria, titulo, descricao} ){

    let iconItem;

    if(categoria == 1){
         iconItem = require('@/assets/images/itemOngList/petsIcon.png')
    }else if(categoria == 2){
         iconItem = require('@/assets/images/itemOngList/humanitariaIcon.png')
    }else{
         iconItem = require('@/assets/images/itemOngList/saudeIcon.png')
    }

    return(

        <TouchableOpacity style={ styles.container }>

            <Image source={iconItem} style={ styles.itemImg } />

            <View style={ styles.ContainerTexto }>

                <Text style={ styles.titulo } >{titulo}</Text>

                <Text style={ styles.paragrafo } >
                    {descricao}
                </Text>

            </View>


        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({

    titulo: {

        fontWeight: 'bold',
        fontSize: 18,

    },

    paragrafo: {

        fontWeight: '300',
        width: 270

    },

    container: {
        
        borderRadius: 8,
        margin: 'auto',
        marginTop: 28,
        width: '95%',
        flexDirection: 'row',
        padding: 28,
        backgroundColor: 'F4F4F4',
        alignItems: 'center',
        justifyContent: 'center',

    },

    itemImg: {

        marginRight: 28

    }

  });
  