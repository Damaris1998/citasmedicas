
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

const Citas=()=> {
  return (
    <View style={styles.container}>
      <Text>Citas Médicas</Text>


<View style={styles.imputgroup}>
<Text>Nombre</Text>
<View style={styles.text}>
  <TextInput ></TextInput>
</View>
<Text>Apellidos</Text>
<View style={styles.text}>
  <TextInput ></TextInput>
</View>
<Text>Fecha de Nacimiento</Text>
<View style={styles.text}>
  <TextInput ></TextInput>
</View>
<View style={styles.button}>
  <Button title="Guardar" />
</View>
</View>
      
    </View>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Citas;