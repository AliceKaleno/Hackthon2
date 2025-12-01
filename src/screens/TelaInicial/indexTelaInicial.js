import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function TelaInicial() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#6A00FF", "#00B4FF"]}
      style={styles.container}
    >
      <View style={styles.bolinhasContainer} pointerEvents="none">
        {/* Parte superior */}
        <View style={[styles.bolinha, { top: 40, left: 25, backgroundColor: "#4de6ff" }]} />
        <View style={[styles.bolinha, { top: 80, left: 90, backgroundColor: "#36ff8a" }]} />
        <View style={[styles.bolinha, { top: 120, right: 50, backgroundColor: "#ffd43b" }]} />
        <View style={[styles.bolinha, { top: 160, left: 160, backgroundColor: "#ff4db8" }]} />

        {/* Parte inferior — mais bolinhas */}
        <View style={[styles.bolinha, { bottom: 180, left: 30, backgroundColor: "#ffffff" }]} />
        <View style={[styles.bolinha, { bottom: 150, right: 40, backgroundColor: "#7bff6b" }]} />
        <View style={[styles.bolinha, { bottom: 120, left: 120, backgroundColor: "#4de6ff" }]} />
        <View style={[styles.bolinha, { bottom: 90, right: 120, backgroundColor: "#ff4db8" }]} />
        <View style={[styles.bolinha, { bottom: 60, left: 190, backgroundColor: "#ffd43b" }]} />
        <View style={[styles.bolinha, { bottom: 30, right: 190, backgroundColor: "#ffffff" }]} />
        <View style={[styles.bolinha, { bottom: 10, left: 80, backgroundColor: "#7bff6b" }]} />
      </View>

      <Image
        source={require("../../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.plataforma}>PLATAFORMA</Text>
      <Text style={styles.ifpe}>IFPE +INTELIGENTE</Text>

      <Text style={styles.subtitulo}>
        Transformando o campus com tecnologia e inovação
      </Text>

      {/* Criar conta */}
      <TouchableOpacity
        style={styles.btnCriar}
        onPress={() => navigation.navigate("CriarConta")}
      >
        <Text style={styles.btnCriarText}>Criar conta</Text>
      </TouchableOpacity>

      {/* Entrar */}
      <TouchableOpacity
        style={styles.btnEntrar}
        onPress={() => navigation.navigate("TelaLogin")}
      >
        <Text style={styles.btnEntrarText}>Entrar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 20,
    overflow: "hidden",
  },
  bolinhasContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -10,
  },
  bolinha: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 50,
    opacity: 0.4,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 20,
  },
  plataforma: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: -5,
  },
  ifpe: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#e8e8e8",
    textAlign: "center",
    fontSize: 12,
    marginTop: 10,
    width: "70%",
  },
  btnCriar: {
    marginTop: 180,
    backgroundColor: "#00d28f",
    paddingVertical: 10,
    paddingHorizontal: 45,
    borderRadius: 20,
  },
  btnCriarText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  btnEntrar: {
    marginTop: 15,
    backgroundColor: "#ffb627",
    paddingVertical: 10,
    paddingHorizontal: 55,
    borderRadius: 20,
  },
  btnEntrarText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
