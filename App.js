import React , {useState} from 'react';
import { StyleSheet, Button, Text, Image, SafeAreaView} from 'react-native';
import {Picker} from "@react-native-picker/picker";
export default function App() {
  
  const [Enable , setEnable]  = useState("courses");

  const [text, setText] = useState("");



  function myFunction(){
    if (Enable == "C")
    {
      onValueChange = setText("\n F Harmonica in 2nd Position")
    }
    if (Enable == "Db")
    {
      onValueChange = setText("\n Gb Harmonica in 2nd Position")
    }
    if (Enable == "D")
    {
      onValueChange = setText("\n G Harmonica in 2nd Position")
    }
    if (Enable == "Eb")
    {
      onValueChange = setText("\n Ab Harmonica in 2nd Position")
    }
    if (Enable == "E")
    {
      onValueChange = setText("\n A Harmonica in 2nd Position")
    }
    if (Enable == "F")
    {
      onValueChange = setText("\n Bb Harmonica in 2nd Position")
    }
    if (Enable == "Gb")
    {
      onValueChange = setText("\n B Harmonica in 2nd Position")
    }
    if (Enable == "G")
    {
      onValueChange = setText("\n C Harmonica in 2nd Position")
    }
    if (Enable == "Ab")
    {
      onValueChange = setText("\n Db Harmonica in 2nd Position")
    }
    if (Enable == "A")
    {
      onValueChange = setText("\n D Harmonica in 2nd Position")
    }
    if (Enable == "Bb")
    {
      onValueChange = setText("\n Eb Harmonica in 2nd Position")
    }
    if (Enable == "B")
    {
      onValueChange = setText("\n E Harmonica in 2nd Position")
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/harmonica.jpg')}
      style={{height: 200, width:400, margin: 40}}
      />
  
      <Text style={{color: 'white'}}>Which key are we in?</Text>
      <Picker
          selectedValue={Enable}
          style={{ height: 50, width: 250, backgroundColor: 'white', marginTop: 20, marginBottom: 20}}
          mode={"dialog"}
          onValueChange={(itemValue) => setEnable(itemValue)}
        >
          <Picker.Item label="Please Select Key" value="Please Select Key"/>
          <Picker.Item label="C" value="C" />
          <Picker.Item label="Db" value="Db" />
          <Picker.Item label="D" value="D" />
          <Picker.Item label="Eb" value="Eb" />
          <Picker.Item label="E" value="E" />
          <Picker.Item label="F" value="F" />
          <Picker.Item label="Gb" value="Gb" />
          <Picker.Item label="G" value="G" />
          <Picker.Item label="Ab" value="Ab" />
          <Picker.Item label="A" value="A" />
          <Picker.Item label="Bb" value="Bb" />
          <Picker.Item label="B" value="B" />
        </Picker>
        <Button color="green" title='Get Harmonicas' onPress={myFunction}/>
        <Text style={{color: 'white'}}>
          {text}
          </Text>
    </SafeAreaView>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'

  },
});