import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PerfilScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      
      {/* Botão Voltar */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#ff4dd2" />
      </TouchableOpacity>

      {/* Ícone topo */}
      <Image 
        source={require("../../../assets/logo.png")} 
        style={styles.logo}
      />

      {/* Foto do usuário */}
      <Image 
        source={require("../../../assets/minhafoto.png")}
        style={styles.profilePhoto}
      />

      {/* Card Dados */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>MEUS DADOS:</Text>

        <Text style={styles.label}>NOME:</Text>
        <Text style={styles.value}>Adriana Pessoa Santos</Text>

        <Text style={styles.label}>CURSO:</Text>
        <Text style={styles.value}>Desenvolvimento de Sistemas</Text>

        <Text style={styles.label}>TURMA:</Text>
        <Text style={styles.value}>3° ano / 2025</Text>
      </View>

      {/* Estatísticas */}
      <View style={styles.statsCard}>
        <Text style={styles.statsTitle}>ESTATÍSTICAS CONSOLIDADAS:</Text>

        <Text style={styles.statText}>PONTOS ECOSCAN: <Text style={styles.num}>120 pts</Text></Text>
        <Text style={styles.statText}>LOCAIS VISITADOS (IFPE Flow): <Text style={styles.num}>42</Text></Text>
        <Text style={styles.statText}>INTERAÇÕES COM O HELPME: <Text style={styles.num}>22</Text></Text>
      </View>

      {/* Botão Editar */}
      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editText}>Editar perfil</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

// ========================= ESTILOS ==============================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e0099",
  },

  backBtn: {
    marginTop: 40,
    marginLeft: 15,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 10,
  },

  profilePhoto: {
    width: 110,
    height: 110,
    borderRadius: 100,
    alignSelf: "center",
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 20,
  },

  card: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#1f5edb",
    padding: 18,
    borderRadius: 18,
    marginBottom: 25,
  },

  cardTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },

  label: {
    color: "#ffffff",
    fontWeight: "bold",
    marginTop: 5,
  },

  value: {
    color: "#d6e4ff",
    marginBottom: 5,
  },

  statsCard: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#00c896",
    padding: 18,
    borderRadius: 18,
    marginBottom: 25,
  },

  statsTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 12,
  },

  statText: {
    color: "#ffffff",
    marginBottom: 5,
  },

  num: {
    fontWeight: "bold",
  },

  editBtn: {
    backgroundColor: "#ffce47",
    padding: 12,
    width: "60%",
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 40,
  },

  editText: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 15,
  }
});
