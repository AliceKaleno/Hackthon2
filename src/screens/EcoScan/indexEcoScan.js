import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function EcoScan({ navigation }) {
    return (
        <LinearGradient colors={["#0a1b7e", "#6e2ddf"]} style={styles.container}>

            {/* Botão voltar */}
            <TouchableOpacity 
                onPress={() => navigation.goBack()} 
                style={{ position: "absolute", top: 40, left: 20 }}
            >
                <Ionicons name="arrow-back" size={26} color="#ff4df0" />
            </TouchableOpacity>

            {/* Logo */}
            <Image 
                source={require("../../../assets/logo.png")} 
                style={{ width: 90, height: 90, marginBottom: 10 }}
                resizeMode="contain"
            />

            {/* Títulos */}
            <Text style={styles.titulo1}>PLATAFORMA</Text>
            <Text style={styles.titulo2}>IFPE +INTELIGENTE</Text>

            <View style={{ height: 20 }} />

            <Text style={styles.subtitulo}>
                <Ionicons name="qr-code-outline" size={22} color="#fff" /> EcoScan IFPE
            </Text>

            {/* QR CODE + Pontos */}
            <View style={styles.cardQr}>
                <Image 
                    source={require("../../../assets/qrcode.png")} 
                    style={{ width: 120, height: 120 }}
                />

                <View style={{ marginLeft: 15, justifyContent: "center" }}>
                    <Text style={styles.qrTitle}>Escanear QR{"\n"}CODE</Text>

                    <View style={styles.pontosBar}>
                        <Text style={styles.pontosTexto}>PONTOS: 120</Text>
                    </View>
                </View>
            </View>

            {/* MEDALHAS */}
            <View style={styles.cardMedalhas}>
                <Text style={styles.cardTitle}>MEDALHAS</Text>

                <View style={styles.medalhasRow}>
                    <Ionicons name="medal-outline" size={26} color="#f5c043" />
                    <Ionicons name="medal-outline" size={26} color="#c0c0c0" />
                    <Ionicons name="medal-outline" size={26} color="#bf8040" />
                </View>
            </View>

            {/* RANKING */}
            <View style={styles.cardRanking}>
                <Text style={styles.cardTitle}>RANKING</Text>

                <View style={styles.rankingItem}>
                    <Text style={styles.rankNum}>1</Text>
                    <Text style={styles.rankNome}>ALICE SILVA</Text>
                </View>

                <View style={styles.rankingItem}>
                    <Text style={styles.rankNum}>2</Text>
                    <Text style={styles.rankNome}>JOÃO GOMES</Text>
                </View>

                <View style={styles.rankingItem}>
                    <Text style={styles.rankNum}>3</Text>
                    <Text style={styles.rankNome}>MARIA ALVES</Text>
                </View>

                <Text style={styles.infoReciclagens}>3.055 RECICLAGENS</Text>
                <Text style={styles.infoLixos}>6.250 LIXOS JOGADOS</Text>
            </View>

            {/* Bolinhas decorativas */}
            <View style={[styles.bola, { top: 120, left: 40, backgroundColor: "#00e0ff" }]} />
            <View style={[styles.bola, { top: 180, right: 50, backgroundColor: "#ffce00" }]} />
            <View style={[styles.bola, { top: 250, left: 90, backgroundColor: "#ff4df0" }]} />
            <View style={[styles.bola, { bottom: 130, right: 80, backgroundColor: "#9dff7a" }]} />
            <View style={[styles.bola, { bottom: 50, left: 50, backgroundColor: "#ffffff" }]} />

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 70
    },

    titulo1: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold"
    },
    titulo2: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },

    subtitulo: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10
    },

    cardQr: {
        marginTop: 15,
        backgroundColor: "rgba(255,255,255,0.1)",
        width: "85%",
        padding: 20,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center"
    },
    qrTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },

    pontosBar: {
        backgroundColor: "#ffffff20",
        padding: 8,
        marginTop: 10,
        borderRadius: 10
    },
    pontosTexto: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold"
    },

    cardMedalhas: {
        backgroundColor: "rgba(255,255,255,0.1)",
        width: "85%",
        padding: 15,
        borderRadius: 14,
        marginTop: 20
    },

    cardTitle: {
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 10
    },

    medalhasRow: {
        flexDirection: "row",
        justifyContent: "space-around"
    },

    cardRanking: {
        backgroundColor: "rgba(255,255,255,0.1)",
        width: "85%",
        padding: 15,
        borderRadius: 14,
        marginTop: 20
    },

    rankingItem: {
        flexDirection: "row",
        marginBottom: 5
    },

    rankNum: {
        color: "#fff",
        fontWeight: "bold",
        width: 25
    },

    rankNome: {
        color: "#fff"
    },

    infoReciclagens: {
        color: "#7fff9f",
        marginTop: 10,
        fontWeight: "bold"
    },

    infoLixos: {
        color: "#9fd3ff",
        fontWeight: "bold"
    },

    bola: {
        position: "absolute",
        width: 12,
        height: 12,
        borderRadius: 6
    }
});

