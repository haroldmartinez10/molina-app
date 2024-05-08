import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { Icon } from "react-native-elements";

const VideoComponent = () => {
  return (
    <View style={styles.containerVideo}>
      <ImageBackground
        source={require("../assets/images/seller.jpeg")}
        style={styles.background}
        borderRadius={10}
      >
        <View style={styles.overlayVideo}>
          <View style={styles.contentVideo}>
            <Text style={styles.titleVideo}>
              {" "}
              Conoce nuestro {"\n"} PRODUCTO{" "}
            </Text>

            <TouchableOpacity>
              <Icon
                name="play-circle-sharp"
                type="ionicon"
                size={70}
                color="#CECECE"
                style={styles.buttonVideo}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default VideoComponent;
