import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Navbar({ setVisibleForm }) {

    return(

        <View style={ styles.container }>
            
            <Image source={require('@/assets/images/navbar/logoHands.png')} />

            <Text style= { styles.teste } >Ajude ONGs, ajude pessoas!</Text>

            <TouchableOpacity 
            onPress={() => setVisibleForm(true)}
            style={ styles.btn }>
                <Text style={ styles.btnText } >Cadastrar ONG</Text>
            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        backgroundColor: '#3CBBC9',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 52,
        paddingTop: 52,
        borderBottomEndRadius: 8,
        borderBottomLeftRadius: 8
    },

    teste: {

        color: '#F8F8F8',
        margin: 14

    },

    btn: {
        backgroundColor: '#F8F8F8',
        width: '60%',
        padding: 12,
        borderRadius: 8
    },

    btnText: {
        color: '#3CBBC9',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }
});
