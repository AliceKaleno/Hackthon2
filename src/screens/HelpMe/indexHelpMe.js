import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

export default function HelpMeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Fundo gradiente */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.imgur.com/vb1qDHL.png" }} // substitua pelo seu logo
          style={styles.logo}
        />

        <Text style={styles.title}>PLATAFORMA</Text>
        <Text style={styles.title2}>IFPE +INTELIGENTE</Text>
      </View>

      {/* Card principal */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            source={{ uri: "https://i.imgur.com/RCX3f9S.png" }} // ícone chatbot
            style={styles.botIcon}
          />
          <Text style={styles.cardTitle}>HelpMe IFPE</Text>
        </View>

        <Text style={styles.cardText}>
          Olá, Adriana! Sou a ORBI, seu assistente{"\n"}
          virtual de apoio ao estudante.
        </Text>

        {/* Botões */}
        <View style={styles.row}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: "#4c55ff" }]}>
            <Text style={styles.btnText}>Rematrícula</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, { backgroundColor: "#ffb400" }]}>
            <Text style={styles.btnText}>Agendas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: "#00d48a" }]}>
            <Text style={styles.btnText}>Apoio Acadêmico</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, { backgroundColor: "#fa3aa1" }]}>
            <Text style={styles.btnText}>Dúvidas</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Meus horários de hoje:</Text>

        {/* Horários */}
        <View style={styles.scheduleCard}>
          <Text style={styles.scheduleText}>📘 Programação 2</Text>
          <Text style={styles.scheduleInfo}>09h–11h || 11h15–12h45</Text>
          <Text style={styles.scheduleInfo}>Lab 07</Text>
        </View>

        <View style={styles.scheduleCard}>
          <Text style={styles.scheduleText}>📗 Filosofia 2</Text>
          <Text style={styles.scheduleInfo}>11h15h às 12h45h</Text>
          <Text style={styles.scheduleInfo}>Sala 01</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202040",
  },
  header: {
    paddingVertical: 40,
    alignItems: "center",
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  title2: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },
  card: {
    backgroundColor: "#f9f9f9",
    margin: 20,
    padding: 25,
    borderRadius: 25,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  botIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0a2240",
  },
  cardText: {
    fontSize: 14,
    color: "#333",
    marginTop: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    flex: 1,
    padding: 12,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 25,
    fontSize: 16,
    fontWeight: "700",
    color: "#0a2240",
  },
  scheduleCard: {
    backgroundColor: "#e7f7ff",
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
  },
  scheduleText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0a2240",
  },
  scheduleInfo: {
    color: "#333",
  },
});
