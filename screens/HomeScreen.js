import { StatusBar } from "expo-status-bar";

import { View, Text } from "react-native";
import GreetingComponent from "../components/GreetingComponent";
import styles from "../styles/styles";
import { useState } from "react";
import VideoComponent from "../components/VideoComponent";

import GridComponent from "../components/GirdComponent";

const HomeScreen = () => {
  const [user, setUser] = useState("Sellar");

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <VideoComponent />
        {/* <CouponComponent /> */}
        <GridComponent />
      </View>
    </View>
  );
};

export default HomeScreen;
