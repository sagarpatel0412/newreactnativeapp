import React,{useState} from 'react';
import { Image, StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState("sagar")
  const [person, setPerson] = useState({name:"apple",age:25})
  const [hello,setHello] = useState("Astronomy")
  const [book,SetBook] = useState("Cosmic Blunder")

  const clickHandler = () => {
    setName('Jack');
    setPerson({name:"anonymous",age:12})
  }

  return (
    <View style={styles.container}>
      {/* <Text>Instagram</Text>
      <Image source={{ uri: "https://images.unsplash.com/photo-1554989373-9c703012d54a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80" }} style={{ width: 305, height: 159 }} /> */}
      <View style={styles.header}>
        <Text style={styles.boldText}>Welcome to my Universe!!!!</Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsum dolor</Text>
        <Text>Lorem ipsum dolor</Text>
        <Text>Lorem ipsum dolor</Text>
        <Text>My Name is {name}</Text>
        <Text>Her name is {person.name}, and her age is {person.age} </Text>
        <Text>Enter Name</Text>
        <TextInput 
        multiline
        placeholder="enter criteria"
        style={styles.input}
        onChangeText={(val) => setHello(val)}/>
        <Text>Enter book</Text>
        <TextInput 
        keyboardType="numeric"
        placeholder="enter Book"
        style={styles.input}
        onChangeText={(val) => setBook(val)}/>
        <Text>I love {hello}, favorite book is {book}</Text>
      </View>
      <View style={styles.buttonContainer}>
       <Button title="Click here" onPress={clickHandler} />
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
  header:{
    backgroundColor:"blue",
    padding:20,
  },
  boldText:{
    fontWeight:"bold",
  },
  body:{
    backgroundColor:"yellow",
    padding:20,
  },
  buttonContainer:{
    marginTop:20,
  },
  input:{
    borderWidth:1,
    borderColor:"#777",
    padding:8,
    margin:10,
    width:200,
  }

});