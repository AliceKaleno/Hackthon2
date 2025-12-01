import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// --- Telas principais ---
import TelaInicial from "../screens/TelaInicial";
import TelaLogin from "../screens/TelaLogin";
import CriarConta from "../screens/CriarConta";

// --- Telas do menu principal ---
import Home from "../screens/Home";
import EcoScan from "../screens/EcoScan";
import IFPEFlow from "../screens/IFPEFlow";
import HelpMe from "../screens/HelpMe";
import Perfil from "../screens/Perfil";
import Configuracoes from "../screens/Configuracoes";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* -------------------------
     BOTTOM TAB NAVIGATOR
------------------------- */
function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#02175b",
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#aaa",
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Configurações"
        component={Configuracoes}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

/* -------------------------
        STACK PRINCIPAL
------------------------- */
export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      {/* Telas de entrada */}
      <Stack.Screen name="TelaInicial" component={TelaInicial} />
      <Stack.Screen name="TelaLogin" component={TelaLogin} />
      <Stack.Screen name="CriarConta" component={CriarConta} />

      {/* Telas do menu Home */}
      <Stack.Screen name="Home" component={TabRoutes} />

      {/* Telas internas do app */}
      <Stack.Screen name="EcoScan" component={EcoScan} />
      <Stack.Screen name="IFPEFlow" component={IFPEFlow} />
      <Stack.Screen name="HelpMe" component={HelpMe} />

    </Stack.Navigator>
  );
}
