import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
    return (
        <LinearGradient
            colors={["#0a1b7e", "#6a5be2", "#f541a6"]}
            style={styles.container}
        >

            {/* Botão Voltar */}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
            >
                <Ionicons name="arrow-back" size={26} color="#ff4fcf" />
            </TouchableOpacity>

            {/* Logo */}
            <View style={styles.logoBox}>
                <MaterialCommunityIcons name="infinity" size={70} color="#00eaff" />
            </View>

            {/* Títulos */}
            <Text style={styles.title}>PLATAFORMA</Text>
            <Text style={styles.subtitle}>IFPE +INTELIGENTE</Text>

            {/* EcoScan */}
            <TouchableOpacity style={[styles.card, { backgroundColor: "#00d4ff" }]}
                onPress={() => navigation.navigate("EcoScan")}
            >
                <View style={styles.cardLeft}>
                    <MaterialCommunityIcons name="recycle" size={35} color="#fff" />
                </View>
                <View style={styles.cardRight}>
                    <Text style={styles.cardTitle}>EcoScan IFPE</Text>
                    <Text style={styles.cardDesc}>Descarte sustentável com pontos.</Text>
                </View>
            </TouchableOpacity>

            {/* IFPE Flow */}
            <TouchableOpacity style={[styles.card, { backgroundColor: "#37e695" }]}
                onPress={() => navigation.navigate("IFPEFlow")}
            >
                <View style={styles.cardLeft}>
                    <MaterialCommunityIcons name="map-marker-radius" size={35} color="#fff" />
                </View>
                <View style={styles.cardRight}>
                    <Text style={styles.cardTitle}>IFPE Flow</Text>
                    <Text style={styles.cardDesc}>Lotação e disponibilidade do campus em tempo real.</Text>
                </View>
            </TouchableOpacity>

            {/* HelpMe IFPE */}
            <TouchableOpacity style={[styles.card, { backgroundColor: "#ffcc4d" }]}
                onPress={() => navigation.navigate("HelpMe")}
            >
                <View style={styles.cardLeft}>
                    <MaterialCommunityIcons name="robot" size={35} color="#fff" />
                </View>
                <View style={styles.cardRight}>
                    <Text style={styles.cardTitle}>HelpMe IFPE</Text>
                    <Text style={styles.cardDesc}>Seu assistente virtual acadêmico.</Text>
                </View>
            </TouchableOpacity>

            {/* Bolinhas decorativas */}
            {Array.from({ length: 18 }).map((_, i) => (
                <View key={i} style={[styles.dot, {
                    top: Math.random() * 700,
                    left: Math.random() * 350,
                    backgroundColor: dotColors[Math.floor(Math.random() * dotColors.length)],
                }]} />
            ))}

            {/* Menu inferior */}
            <View style={styles.bottomMenu}>
                <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
                    <View style={styles.menuItem}>
                        <Ionicons name="person-circle-outline" size={25} color="#fff" />
                        <Text style={styles.menuText}>Perfil</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={styles.menuItem}>
                        <Ionicons name="home-outline" size={25} color="#fff" />
                        <Text style={styles.menuText}>Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Configuracoes")}>
                    <View style={styles.menuItem}>
                        <Ionicons name="settings-outline" size={25} color="#fff" />
                        <Text style={styles.menuText}>Configurações</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    );
}

const dotColors = ["#00d4ff", "#37e695", "#ffcc4d", "#ffffff", "#6a5be2", "#ff4fcf"];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    backButton: {
        marginTop: 20,
        marginLeft: 5
    },
    logoBox: {
        alignItems: "center",
        marginTop: 10
    },
    title: {
        color: "#fff",
        textAlign: "center",
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 16,
    },
    subtitle: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 22,
        marginBottom: 25
    },
    card: {
        flexDirection: "row",
        padding: 18,
        borderRadius: 18,
        marginBottom: 18,
        alignItems: "center",
        elevation: 3
    },
    cardLeft: {
        width: 50,
        alignItems: "center"
    },
    cardRight: {
        flex: 1
    },
    cardTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    cardDesc: {
        color: "#fff",
        fontSize: 12
    },
    dot: {
        position: "absolute",
        width: 10,
        height: 10,
        borderRadius: 5,
        opacity: 0.8
    },
    bottomMenu: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(0,0,50,0.60)",
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    menuItem: {
        alignItems: "center"
    },
    menuText: {
        color: "#fff",
        fontSize: 12
    }
});
