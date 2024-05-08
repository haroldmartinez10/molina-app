import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import SvgCard1 from "../assets/svg/SvgCard1";
import SvgCard2 from "../assets/svg/SvgCard2";
import SvgCard3 from "../assets/svg/SvgCard3";
import SvgCard4 from "../assets/svg/SvgCard4";
import SvgCard5 from "../assets/svg/SvgCard5";
import SvgCard6 from "../assets/svg/SvgCard6";
import { useNavigation } from "@react-navigation/native";

const GridComponent = () => {
  const navigation = useNavigation();

  const cardsData = [
    {
      id: 1,
      title: "Clientes",
      content: "Contenido de la tarjeta 1",
      icon: <SvgCard1 width={60} height={60} />,
      screen: "Clientes",
    },
    {
      id: 2,
      title: "Calendario",
      content: "Contenido de la tarjeta 2",
      icon: <SvgCard2 width={60} height={60} />,
      screen: "Calendario",
    },
    {
      id: 3,
      title: "Usuarios",
      content: "Contenido de la tarjeta 3",
      icon: <SvgCard3 width={60} height={60} />,
      screen: "ClientScreen",
    },
    {
      id: 4,
      title: "⁠Parámetros",
      content: "Contenido de la tarjeta 4",
      icon: <SvgCard4 width={60} height={60} />,
      screen: "WalletScreen",
    },
    {
      id: 5,
      title: "⁠Reporte",
      content: "Contenido de la tarjeta 5",
      icon: <SvgCard5 width={60} height={60} />,
      screen: "WalletScreen",
    },
    {
      id: 6,
      title: "Auditoría",
      content: "Contenido de la tarjeta 6",
      icon: <SvgCard6 width={60} height={60} />,
      screen: "WalletScreen",
    },
  ];

  const handleCardPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.gridContainer}>
      {cardsData.map((card) => (
        <TouchableOpacity
          key={card.id}
          style={styles.card}
          onPress={() => handleCardPress(card.screen)}
        >
          {card.icon}
          <Text style={styles.text}>{card.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  card: {
    width: "48%",
    height: 120,
    backgroundColor: "#143D59",
    marginBottom: 10,
    padding: 12,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 9,
    color: "white",
  },
});

export default GridComponent;
