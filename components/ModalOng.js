import { View, Modal, Text, Button, StyleSheet } from "react-native";

export default function ModalOng({ visible, setVisible, modalInfo }) {

  return (
    <View style={styles.container}>
      <Modal visible={visible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>


            <Text style={styles.ongTitle} >{modalInfo.nome}</Text>

            <Text style={styles.ongText} >{modalInfo.texto}</Text>

            <Text style={styles.ongChavePix} >Chave Pix: {modalInfo.chavePix}</Text>


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

  ongTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 18,
    textAlign: 'center'
  },

  ongText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 18
  },

  ongChavePix: {
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 28
  }

});
