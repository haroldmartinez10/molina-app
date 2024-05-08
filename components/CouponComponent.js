import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

const CouponComponent = () => {
  return (
    <>
      <View style={styles.couponContainer}>
        <Text style={styles.couponTitle}>CONECTAMOS REDES Y PERSONAS</Text>
        <Text style={styles.couponSubtitle}>
          Muestra este cupón y obtén tu beneficio en tu primer producto
        </Text>
        <Text style={styles.couponSubtitleCode}>
          25D1-WLCU-EX9F - UTILIZADO
        </Text>
        <Text style={styles.couponSubtitleValid}>
          * Tendrás 60 días para redimirlo - Válido solo presencial
        </Text>
      </View>
    </>
  );
};

export default CouponComponent;
