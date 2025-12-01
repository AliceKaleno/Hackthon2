import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TelaLogin() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    const data = await AsyncStorage.getItem("usuario");

    if (!data) {
      return Alert.alert("Erro", "Nenhuma conta encontrada.");
    }

    const usuario = JSON.parse(data);

    if (email !== usuario.email || senha !== usuario.senha) {
      return Alert.alert("Erro", "E-mail ou senha incorretos.");
    }

    Alert.alert("Sucesso!", "Login realizado com sucesso!", [
      {
        text: "OK",
        onPress: () => navigation.navigate("Home"),
      },
    ]);
  }

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
        
      {/* VOLTAR */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={26} color="#fff" />
      </TouchableOpacity>

      {/* LOGO */}
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.plataforma}>PLATAFORMA</Text>
      <Text style={styles.ifpe}>IFPE +INTELIGENTE</Text>

      {/* FORMULÁRIO */}
      <View style={styles.form}>
        <Text style={styles.label}>E-mail institucional:</Text>
        <TextInput
          placeholder="Ex.: aps01@discente.ifpe.edu.br"
          placeholderTextColor="#ddd"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          placeholder="••••••••••••"
          placeholderTextColor="#ddd"
          secureTextEntry
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      {/* BOTÃO ENTRAR */}
      <TouchableOpacity style={styles.btnEntrar} onPress={handleLogin}>
        <Text style={styles.btnEntrarText}>Entrar</Text>
      </TouchableOpacity>

      {/* BOTÃO CRIAR CONTA */}
      <TouchableOpacity
        onPress={() => navigation.navigate("CriarConta")}
        style={styles.btnCriar}
      >
        <Text style={styles.btnCriarText}>Criar uma conta</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
  },

  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 99,
  },

  logo: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },

  plataforma: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  ifpe: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },

  form: {
    width: "85%",
    marginTop: 10,
  },

  label: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 4,
  },

  input: {
    backgroundColor: "rgba(0,0,70,0.4)",
    borderRadius: 10,
    padding: 12,
    color: "#fff",
    marginBottom: 15,
  },

  btnEntrar: {
    backgroundColor: "#ffb627",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 20,
    marginTop: 20,
  },

  btnEntrarText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },

  btnCriar: {
    marginTop: 12,
  },

  btnCriarText: {
    color: "#fff",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
