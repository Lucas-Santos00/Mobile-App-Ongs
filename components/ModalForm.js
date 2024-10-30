import { View, Modal, Text, Button, StyleSheet } from "react-native";

export default function ModalForm({ visible, setVisible }) {

  return (
    <View style={styles.container}>
      <Modal visible={visible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

              <Text style={ styles.title } >Para por sua ONG na lista de ongs, envie um e-mail 
                para <Text style={ styles.boldText }>cadastro@ongs.com.br</Text> contendo 
                as seguintes informações:</Text>

              <Text style={ styles.itemList } >Nome da sua ONG</Text>

              <Text style={ styles.itemList } >CNPJ</Text>

              <Text style={ styles.itemList } >Descrição</Text>

              <Text style={ styles.itemList } >Localização</Text>

              <Text style={ [styles.itemList, styles.lastItemList] } >ChavePix</Text>

            <Button title="Fechar" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 320,
    padding: 28,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    width: '80%',
    textAlign: 'center',
    marginBottom: 22
  },
  itemList: {
    marginBottom: 4
  },
  lastItemList: {
    marginBottom: 12
  },
  boldText: {
    fontWeight: '600'
  }
});
