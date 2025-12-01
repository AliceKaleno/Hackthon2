import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function IFPEFlow({ navigation }) {
    return (
        <LinearGradient colors={["#0a1b7e", "#8f5af0"]} style={styles.container}>
            
            {/* Botão Voltar */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="#ff3ebf" />
            </TouchableOpacity>

            {/* Logo */}
            <Text style={styles.logo}>🔗</Text>

            {/* Título */}
            <Text style={styles.title}>PLATAFORMA{"\n"}IFPE +INTELIGENTE</Text>

            {/* Subtítulo */}
            <Text style={styles.subTitle}>IFPE Flow{"\n"}Lotação e disponibilidade</Text>

            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: "center" }}>

                {/* CARD DE AMBIENTES */}
                <View style={styles.card}>

                    <Row icon="library" label="BIBLIOTECA" status="LIVRE" color="#00e676" />
                    <Row icon="desktop" label="LAB 07" status="LOTADO" color="#ff5252" />
                    <Row icon="desktop" label="SALA 06" status="LOTADO" color="#ff5252" />
                    <Row icon="fast-food" label="REFEITÓRIO" status="MODERADO" color="#ffca28" />

                </View>

                {/* PREVISÃO DE DISPONIBILIDADE */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>PREVISÃO DE DISPONIBILIDADE:</Text>

                    <Text style={styles.predictText}>SALA 02: DISPONÍVEL AS 07:15</Text>
                    <Text style={styles.predictText}>LAB 03: DISPONÍVEL AS 08:45</Text>

                    <Text style={styles.more}>Ver mais</Text>
                </View>

            </ScrollView>

        </LinearGradient>
    );
}

function Row({ icon, label, status, color }) {
    return (
        <View style={styles.row}>
            <Ionicons name={icon} size={22} color="#fff" />
            <Text style={styles.rowLabel}>{label}</Text>

            <View style={[styles.statusBox, { backgroundColor: color }]}>
                <Text style={styles.statusText}>{status}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 40, alignItems: "center" },

    backButton: {
        position: "absolute",
        top: 40,
        left: 20,
        zIndex: 10
    },

    logo: {
        fontSize: 40,
        marginBottom: 10,
        marginTop: 20
    },

    title: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 5
    },

    subTitle: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20
    },

    card: {
        width: "85%",
        backgroundColor: "#00c4f0",
        padding: 15,
        borderRadius: 15,
        marginBottom: 20
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#0a1b7e",
        padding: 12,
        borderRadius: 10,
        marginBottom: 10
    },

    rowLabel: {
        flex: 1,
        color: "#fff",
        marginLeft: 10,
        fontWeight: "bold"
    },

    statusBox: {
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 10
    },

    statusText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 12
    },

    cardTitle: {
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 10
    },

    predictText: {
        color: "#fff",
        marginBottom: 5
    },

    more: {
        marginTop: 10,
        color: "#fff",
        fontSize: 12,
        textAlign: "left",
        textDecorationLine: "underline"
    }
});
