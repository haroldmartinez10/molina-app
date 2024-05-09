import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { Icon } from "react-native-elements";

const VideoComponent = () => {
  return (
    <View style={styles.containerVideo}>
      <Text style={{ marginBottom: 20, fontWeight: "bold" }}>
        Hola,{" "}
        <Text
          style={{ marginBottom: 20, fontWeight: "bold", color: "#143D59" }}
        >
          Andres Molina
        </Text>
      </Text>

      <ImageBackground
        source={require("../assets/images/seller.jpeg")}
        style={styles.background}
        borderRadius={10}
      >
        <View style={styles.overlayVideo}>
          <View style={styles.contentVideo}>
            <Text style={styles.titleVideo}> </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default VideoComponent;
