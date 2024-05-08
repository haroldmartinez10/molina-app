import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      onLogin(true);
    } else {
      alert("Credenciales inválidas");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/seller.jpeg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.loginText}>Inicio de sesión</Text>
        <Text style={styles.label}>Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { height } = Dimensions.get("window");
const imageHeight = height * 0.4;

const styles = StyleSheet.create({
  loginText: {
    fontSize: 24,
    color: "#143D59",
    marginBottom: 20,
  },
  label: {
    color: "#143D59",
    marginBottom: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    maxHeight: imageHeight,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  formContainer: {
    flex: 1,
    width: "90%",
    marginTop: 20,
  },
  input: {
    height: 40,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#143D59",
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
