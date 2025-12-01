import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Configuracoes({ navigation }) {
  return (
    <LinearGradient
      colors={["#7b2ff7", "#00c6ff"]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>

        {/* BOTÃO VOLTAR */}
        <TouchableOpacity
          style={styles.btnVoltar}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={26} color="#ff5cf7" />
        </TouchableOpacity>

        {/* LOGO */}
        <View style={styles.logoContainer}>
          <Ionicons name="infinite" size={70} color="#fff" />
        </View>

        {/* TÍTULO */}
        <Text style={styles.titulo}>PLATAFORMA</Text>
        <Text style={styles.subtitulo}>IFPE +INTELIGENTE</Text>

        {/* —— CARTÃO 1 — CONTA —— */}
        <View style={[styles.card, { backgroundColor: "#1e78ff" }]}>
          <View style={styles.cardHeader}>
            <Ionicons name="person-outline" size={22} color="#fff" />
            <Text style={styles.cardTitulo}>CONTA:</Text>
          </View>

          <Text style={styles.cardText}>EDITAR DADOS</Text>
          <Text style={styles.cardText}>TROCAR SENHA</Text>
        </View>

        {/* —— CARTÃO 2 — PLATAFORMA —— */}
        <View style={[styles.card, { backgroundColor: "#ff4f9f" }]}>
          <View style={styles.cardHeader}>
            <Ionicons name="settings-outline" size={22} color="#fff" />
            <Text style={styles.cardTitulo}>PLATAFORMA:</Text>
          </View>

          <Text style={styles.cardText}>IDIOMA</Text>
          <Text style={styles.cardText}>ACESSIBILIDADE (ALTO CONTRASTE / FONTES MAIORES)</Text>
          <Text style={styles.cardText}>NOTIFICAÇÕES</Text>
        </View>

        {/* —— CARTÃO 3 — SOBRE —— */}
        <View style={[styles.card, { backgroundColor: "#3ed598" }]}>
          <View style={styles.cardHeader}>
            <Ionicons name="information-circle-outline" size={22} color="#fff" />
            <Text style={styles.cardTitulo}>SOBRE:</Text>
          </View>

          <Text style={styles.cardText}>DESENVOLVIDO POR INTEGRA TECH</Text>
          <Text style={styles.cardText}>VERSÃO: 1.0</Text>
        </View>

      </ScrollView>

      {/* BOLINHAS DECORATIVAS */}
      <View style={[styles.bolinha, { top: 150, left: 40, backgroundColor: "#ffdd59" }]} />
      <View style={[styles.bolinha, { top: 260, right: 50, backgroundColor: "#18dcff" }]} />
      <View style={[styles.bolinha, { top: 400, left: 70, backgroundColor: "#7efff5" }]} />
      <View style={[styles.bolinha, { top: 520, right: 30, backgroundColor: "#ff6b81" }]} />

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  btnVoltar: {
    marginTop: 30,
    marginBottom: 10,
    width: 40,
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 5,
  },

  titulo: {
    textAlign: "center",
    marginTop: 10,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  subtitulo: {
    textAlign: "center",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    width: "100%",
    padding: 18,
    borderRadius: 14,
    marginTop: 20,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  cardTitulo: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },

  cardText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 6,
  },

  bolinha: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 6,
    opacity: 0.9,
  },
});
