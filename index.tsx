import React, { useState } from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Navbar from "@/components/Navbar";
import BtnFilter from "@/components/BtnFilter";
import ItemOngList from "@/components/ItemOngList";
import ModalOng from "@/components/ModalOng";
import ModalForm from "@/components/ModalForm";

export default function Index() {
  const [visibleModalOng, setVisibleModalOng] = useState(false);
  const [visibleModalForm, setVisibleModalForm] = useState(false);
  const [selectedOng, setSelectedOng] = useState({
    nome: "",
    texto: "",
    chavePix: "",
  });
  const [filtroAtivo, setFiltroAtivo] = useState(0); // 0 = todos, 1 = pets, 2 = humanitária, 3 = saúde

  // Dados de exemplo das ONGs
  const ongsData = [
    {
      id: 1,
      categoria: 1, // Pets
      titulo: "Amigos dos Animais",
      descricao: "Resgate e cuidado de animais abandonados",
      nome: "Amigos dos Animais",
      texto:
        "ONG dedicada ao resgate, tratamento e adoção responsável de animais abandonados. Trabalhamos com cães e gatos em situação de rua.",
      chavePix: "amigos.animais@email.com",
    },
    {
      id: 2,
      categoria: 2, // Humanitária
      titulo: "Casa de Apoio",
      descricao: "Auxílio a famílias em situação de vulnerabilidade",
      nome: "Casa de Apoio",
      texto:
        "Oferecemos suporte a famílias em situação de vulnerabilidade social, fornecendo alimentos, roupas e apoio psicológico.",
      chavePix: "casa.apoio@email.com",
    },
    {
      id: 3,
      categoria: 3, // Saúde
      titulo: "Saúde para Todos",
      descricao: "Atendimento médico gratuito para comunidades carentes",
      nome: "Saúde para Todos",
      texto:
        "Prestamos atendimento médico gratuito e campanhas de prevenção em comunidades carentes, levando saúde e bem-estar.",
      chavePix: "saude.todos@email.com",
    },
    {
      id: 4,
      categoria: 1, // Pets
      titulo: "Patinhas Solidárias",
      descricao: "Proteção e adoção de animais de rua",
      nome: "Patinhas Solidárias",
      texto:
        "Resgatamos, tratamos e encontramos lares para animais de rua. Também promovemos campanhas de castração gratuita.",
      chavePix: "patinhas.solidarias@email.com",
    },
    {
      id: 5,
      categoria: 2, // Humanitária
      titulo: "Prato Cheio",
      descricao: "Combate à fome e distribuição de alimentos",
      nome: "Prato Cheio",
      texto:
        "Combatemos a fome através da arrecadação e distribuição de alimentos para pessoas em situação de rua e famílias carentes.",
      chavePix: "prato.cheio@email.com",
    },
    {
      id: 6,
      categoria: 3, // Saúde
      titulo: "Vida Plena",
      descricao: "Apoio a pacientes com câncer",
      nome: "Vida Plena",
      texto:
        "Oferecemos apoio emocional, financeiro e estrutural a pacientes com câncer e suas famílias durante o tratamento.",
      chavePix: "vida.plena@email.com",
    },
  ];

  // Função para filtrar ONGs
  const getOngsFiltradas = () => {
    if (filtroAtivo === 0) {
      return ongsData;
    }
    return ongsData.filter((ong) => ong.categoria === filtroAtivo);
  };

  // Função para abrir modal com informações da ONG
  const handleOpenModalOng = (index) => {
    const ongsFiltradas = getOngsFiltradas();
    const ong = ongsFiltradas[index];
    setSelectedOng({
      nome: ong.nome,
      texto: ong.texto,
      chavePix: ong.chavePix,
    });
    setVisibleModalOng(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        {/* Navbar */}
        <Navbar setVisibleForm={setVisibleModalForm} />

        {/* Botões de Filtro */}
        <View style={styles.filterContainer}>
          <BtnFilter
            backgroundColor={filtroAtivo === 0 ? "#3CBBC9" : "#B0B0B0"}
            text="Todas"
            onPress={() => setFiltroAtivo(0)}
          />
          <BtnFilter
            backgroundColor={filtroAtivo === 1 ? "#3CBBC9" : "#B0B0B0"}
            text="Pets"
            onPress={() => setFiltroAtivo(1)}
          />
          <BtnFilter
            backgroundColor={filtroAtivo === 2 ? "#3CBBC9" : "#B0B0B0"}
            text="Humanitária"
            onPress={() => setFiltroAtivo(2)}
          />
          <BtnFilter
            backgroundColor={filtroAtivo === 3 ? "#3CBBC9" : "#B0B0B0"}
            text="Saúde"
            onPress={() => setFiltroAtivo(3)}
          />
        </View>

        {/* Lista de ONGs */}
        <FlatList
          data={getOngsFiltradas()}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <ItemOngList
              categoria={item.categoria}
              titulo={item.titulo}
              descricao={item.descricao}
              pressFunction={handleOpenModalOng}
              arrayIndex={index}
            />
          )}
          contentContainerStyle={styles.listContent}
        />

        {/* Modal de detalhes da ONG */}
        <ModalOng
          visible={visibleModalOng}
          setVisible={setVisibleModalOng}
          modalInfo={selectedOng}
        />

        {/* Modal de formulário de cadastro */}
        <ModalForm
          visible={visibleModalForm}
          setVisible={setVisibleModalForm}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  mainContent: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#F8F8F8",
  },
  listContent: {
    paddingBottom: 20,
  },
});
