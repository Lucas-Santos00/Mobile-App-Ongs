import { StyleSheet, View, ScrollView } from 'react-native';
import { useState } from 'react';

// Import de componentes
import Navbar from "@/components/Navbar"
import BtnFilter from "@/components/BtnFilter"
import ItemOngList from "@/components/ItemOngList"

const data = [
  { id: 1, nome: "Ong - Ajuda Animais", texto: "ONG de proteção a animais em Itapema, desde 2010 ajudando animais de rua.", tipo: 1 },
  { id: 2, nome: "Ong - Amor aos Animais", texto: "Trabalhamos com resgate e adoção de animais abandonados em toda a região de Santa Catarina.", tipo: 1 },
  { id: 3, nome: "Ong - Ação Humanitária", texto: "Atuamos em situações de emergência, oferecendo ajuda humanitária a comunidades afetadas.", tipo: 2 },
  { id: 4, nome: "Ong - Ação Social", texto: "Atendemos crianças em situação de vulnerabilidade social, promovendo educação e inclusão.", tipo: 2 },
  { id: 5, nome: "Ong - Saúde para Todos", texto: "ONG dedicada à saúde pública, oferecendo assistência médica gratuita na comunidade desde 2015.", tipo: 3 },
  { id: 6, nome: "Ong - Saúde e Vida", texto: "Focada na prevenção e tratamento de doenças, oferecendo campanhas de saúde gratuitas.", tipo: 3 },
  { id: 7, nome: "Ong - Proteção ao Meio Ambiente", texto: "Projetos de conservação ambiental e educação sobre sustentabilidade desde 2018.", tipo: 2 },
  { id: 8, nome: "Ong - Cuidando do Futuro", texto: "Iniciativas para ajudar jovens a encontrar oportunidades de emprego e desenvolvimento pessoal.", tipo: 3 }
];

export default function HomeScreen() {
  // Filtros - 0 Todos, 1 Saúde, 2 Pets e 3 Humanitária
  const [filtro, setFiltro] = useState(0);

  return (
    <View style={styles.container}>
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

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {data.map(ong => (
        (ong.tipo === filtro || filtro === 0) && (
        <ItemOngList 
        key={ong.id} 
        categoria={ong.tipo} 
        titulo={ong.nome} 
        descricao={ong.texto} 
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
  scrollViewContent: {
    paddingBottom: 20,
  },
});
