import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Pressable } from "react-native";

const App = () => {
  const [data, setData] = useState({})
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Registro</Text>

        <View style={styles.formBody}>
          <Text style={styles.formText}>Informacion</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Ingrese el nombre del usuario"
          />
          <TextInput
            style={styles.formInput}
            placeholder="Ingrese el apellido del usuario"
          />
          <TextInput
            style={styles.formInput}
            placeholder="Ingrese el correo del usuario"
          />
        </View>

        <View style={styles.formBody}>
          <Text style={styles.formText}>Acerca del usuario</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Ingrese el nombre de usuario"
          />
          <TextInput
            style={styles.formInput}
            placeholder="Ingrese la contraseña del usuario"
          />
          <TextInput
            style={styles.formInput}
            placeholder="Verificar contraseña"
          />
        </View>

        <View style={styles.formBody}>
          <Pressable style={styles.formButton}>
            <Text style={styles.textButton}>Registrar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#4D6F5F",
    alignItems: "center",
    fontFamily: "sans-serif",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    height: 550,
    shadowColor: "black",
    width: 400,
    elevation: 10,

    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    paddingHorizontal: 75,
    paddingVertical: 35,
  },
  formInput: {
    width: 250,
    height: 30,
    borderWidth: 0.5,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  formBody: {
    marginVertical: 15,
  },
  formTitle: {
    position: "absolute",
    top: 45,
    fontSize: 20,
    fontWeight: "bold",
    color: "#004725",
  },
  formText: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: "bold",
    color: "#004725",
  },
  formButton:{
    display:'flex',
    justifyContent:'center',
    width:125,
    height:40,
    backgroundColor: "#004725",
    borderRadius:25
  },
  textButton:{
    textAlign:'center',
    color:'white',
    fontSize:15,
    fontWeight:'bold'
  }
});

export default App;
