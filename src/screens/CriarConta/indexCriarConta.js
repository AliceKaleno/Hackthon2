// CRIAR CONTA – CÓDIGO CORRIGIDO
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
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CriarConta() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");

  async function handleCriar() {
    if (!nome.trim()) {
      return Alert.alert("Erro", "Preencha o nome completo.");
    }

    if (!email.endsWith("@discente.ifpe.edu.br")) {
      return Alert.alert(
        "Email inválido",
        "Use seu e-mail institucional @discente.ifpe.edu.br."
      );
    }

    // 🔥 SENHA CORRIGIDA
    if (senha.length < 6) {
      return Alert.alert("Senha fraca", "A senha deve ter pelo menos 6 dígitos.");
    }

    if (senha !== confirmar) {
      return Alert.alert("Erro", "As senhas não coincidem.");
    }

    const usuario = { nome, email, senha };

    try {
      const response = await axios.post(
        "http://localhost:3000/usuarios",
        usuario
      );

      Alert.alert("Sucesso!", "Conta criada com sucesso!", [
        {
          text: "OK",
          // 🔥 REDIRECIONA PARA HOME
          onPress: () => navigation.navigate("Home"),
        },
      ]);
    } catch (err) {
      console.log(err);
      Alert.alert("Erro", "Não foi possível criar a conta no servidor.");
    }
  }

  return (
    <LinearGradient colors={["#6A00FF", "#00B4FF"]} style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={26} color="#fff" />
      </TouchableOpacity>

      <Image
        source={require("../../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.plataforma}>PLATAFORMA</Text>
      <Text style={styles.ifpe}>IFPE +INTELIGENTE</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Nome completo:</Text>
        <TextInput
          placeholder="Ex.: Adriana Pessoa Santos"
          placeholderTextColor="#ddd"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>E-mail institucional:</Text>
        <TextInput
          placeholder="Ex.: aps01@discente.ifpe.edu.br"
          placeholderTextColor="#ddd"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          placeholder="••••••••••••"
          placeholderTextColor="#ddd"
          secureTextEntry={true}
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
        />

        <Text style={styles.label}>Confirmar senha:</Text>
        <TextInput
          placeholder="••••••••••••"
          placeholderTextColor="#ddd"
          secureTextEntry={true}
          style={styles.input}
          value={confirmar}
          onChangeText={setConfirmar}
        />
      </View>

      <TouchableOpacity style={styles.btnCriar} onPress={handleCriar}>
        <Text style={styles.btnCriarText}>Criar conta</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 999,
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
    marginBottom: 15,
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
  btnCriar: {
    backgroundColor: "#ffb627",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 20,
    marginTop: 10,
  },
  btnCriarText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
