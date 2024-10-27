import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useState } from 'react';

// Import de componentes
import Navbar from "@/components/Navbar"
import BtnFilter from "@/components/BtnFilter"
import ItemOngList from "@/components/ItemOngList"
import ModalOng  from "@/components/ModalOng"

const data = [
  { id: 1, nome: "Ong - Ajuda Animais", texto: "ONG de proteção a animais em Itapema, desde 2010 ajudando animais de rua.", tipo: 1, chavePix: "ajuda.animais@exemplo.com" },
  { id: 2, nome: "Ong - Amor aos Animais", texto: "Trabalhamos com resgate e adoção de animais abandonados em toda a região de Santa Catarina.", tipo: 1, chavePix: "amor.animais@exemplo.com" },
  { id: 3, nome: "Ong - Ação Humanitária", texto: "Atuamos em situações de emergência, oferecendo ajuda humanitária a comunidades afetadas.", tipo: 2, chavePix: "acao.humanitaria@exemplo.com" },
  { id: 4, nome: "Ong - Ação Social", texto: "Atendemos crianças em situação de vulnerabilidade social, promovendo educação e inclusão.", tipo: 2, chavePix: "acao.social@exemplo.com" },
  { id: 5, nome: "Ong - Saúde para Todos", texto: "ONG dedicada à saúde pública, oferecendo assistência médica gratuita na comunidade desde 2015.", tipo: 3, chavePix: "saude.todos@exemplo.com" },
  { id: 6, nome: "Ong - Saúde e Vida", texto: "Focada na prevenção e tratamento de doenças, oferecendo campanhas de saúde gratuitas.", tipo: 3, chavePix: "saude.vida@exemplo.com" },
  { id: 7, nome: "Ong - Proteção ao Meio Ambiente", texto: "Projetos de conservação ambiental e educação sobre sustentabilidade desde 2018.", tipo: 2, chavePix: "protecao.meioambiente@exemplo.com" },
  { id: 8, nome: "Ong - Cuidando do Futuro", texto: "Iniciativas para ajudar jovens a encontrar oportunidades de emprego e desenvolvimento pessoal.", tipo: 3, chavePix: "cuidando.futuro@exemplo.com" }
];
''

export default function HomeScreen() {
  // Filtros - 0 Todos, 1 Saúde, 2 Pets e 3 Humanitária
  const [filtro, setFiltro] = useState(0);
  const [modalInfo, setModalInfo] = useState(0);
  const [visible, setVisible] = useState(false);

  const showModalFunction = (index: number) =>{

    setModalInfo(index)
    setVisible(true)

    }

  return (
    <View style={styles.container}>

      <ModalOng visible={visible} setVisible={setVisible} modalInfo={data[modalInfo]} />

      <Navbar />

      <View style={styles.btnFilterContainer}>
        <View style={styles.btnWrapper}>
          <BtnFilter backgroundColor={'#9FC93C'} text={'Todos'} onPress={() => setFiltro(0)} />
        </View>
        <View style={styles.btnWrapper}>
          <BtnFilter backgroundColor={'#C93C3C'} text={'Saúde'} onPress={() => setFiltro(3)} />
        </View>
        <View style={styles.btnWrapper}>
          <BtnFilter backgroundColor={'#C9BD3C'} text={'Pets'} onPress={() => setFiltro(1)} />
        </View>
        <View>
          <BtnFilter backgroundColor={'#7B3CC9'} text={'Humanitária'} onPress={() => setFiltro(2)} />
        </View>
      </View>

      <ScrollView style={ styles.scrollContainer } contentContainerStyle={styles.scrollViewContent}>
      {data.map( (ong, index) => (
        (ong.tipo === filtro || filtro === 0) && (
        <ItemOngList
        pressFunction={showModalFunction}
        key={ong.id} 
        categoria={ong.tipo} 
        titulo={ong.nome} 
        descricao={ong.texto}
        arrayIndex={index} 
      />
    )
  ))}
</ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  btnFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  btnWrapper: {
    marginRight: 12,
  },
  scrollContainer: {
    height: '100%'
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});
