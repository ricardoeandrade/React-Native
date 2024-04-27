import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';

export default function App() {

  const [contador, setContador]= useState(0);
  const incremento = () => {
    setContador(contador +1)
  }

  function decremento() {
    if (contador >0){
    setContador(contador -1)
    } else {
    //Alert.alert("impossível decrementar a partir desse ponto")
    //ToastAndroid.show("Erro,o contador já está em 0, não épossivel decrementar mais",ToastAndroid.SHORT);
    showToast();
    return;
    }
  }

  function showToast(){
    Toast.show({
      type:"error",
      text1:"Aviso",
      text2:"impossivel decrementar",
      position:"bottom",
      bottomOffset: 20

    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={incremento}
      style={styles.button} >
      
        <Text style={ {color: 'white',textAlign:"center"}}>
          Incrementar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={decremento}
      style={styles.button}>
        <Text style={{color:"white" , textAlign: "center"}}>
        Decrementar
        </Text>
      </TouchableOpacity>

      <Text>Contador:{contador}</Text>
      <StatusBar style="auto" />
      <Toast/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "black",
    borderRadius: 8,
    padding: 10,
    width:150,
    margin:10

  }
});
