import React, { useState } from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WalletScreen from "./screens/ClientScreen";
import ClientScreen from "./screens/ClientScreen";
import CalendarScreen from "./screens/CalendarScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [loggedIn, setLoggedIn] = useState(false);

  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "Inicio":
        icon = "person";
        break;
      case "Configuración":
        icon = "settings";
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? "white" : "gray"}
      />
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const handleLogin = (isLoggedIn) => {
    setLoggedIn(isLoggedIn);
  };

  if (!loggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <CurvedBottomBarExpo.Navigator
            type="DOWN"
            style={[styles.bottomBar, { marginTop: -10 }]}
            shadowStyle={styles.shawdow}
            height={55}
            circleWidth={50}
            bgColor="#143D59"
            initialRouteName="Inicio"
            borderTopLeftRight
            renderCircle={({ selectedTab, navigate }) => (
              <Animated.View style={styles.btnCircleUp}>
                <TouchableOpacity style={styles.button}>
                  <Ionicons name={"home-outline"} color="gray" size={25} />
                </TouchableOpacity>
              </Animated.View>
            )}
            tabBar={renderTabBar}
          >
            <CurvedBottomBarExpo.Screen
              name="Inicio"
              position="LEFT"
              component={() => <HomeScreen />}
            />

            <CurvedBottomBarExpo.Screen
              name="Clientes"
              component={() => <ClientScreen />}
            />

            <CurvedBottomBarExpo.Screen
              name="Calendario"
              component={() => <CalendarScreen />}
            />

            <CurvedBottomBarExpo.Screen
              name="Configuración"
              component={() => <ProfileScreen />}
              position="RIGHT"
            />
          </CurvedBottomBarExpo.Navigator>
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    bottom: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: "#BFEFFF",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#FFEBCD",
  },
});
