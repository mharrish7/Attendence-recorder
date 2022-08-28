import { Button, StyleSheet, Text, View , ToastAndroid} from 'react-native';
import Card from './components/card';
import Header from './components/header'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState,useEffect } from 'react';


export default function App() {

  const [dat,setdd] = useState(0);
  const [dat1,setdd1] = useState(0);
  const [dat2,setdd2] = useState(0);
  const [dat3,setdd3] = useState(0);
  const [dat4,setdd4] = useState(0);
  
  const mf = () => {
    var dat2 = parseInt(dat) + 1;
    setdd(String(dat2));
    const sd = async() => {
    try{
      await AsyncStorage.setItem('maths',String(dat2)).then(() => {
        ToastAndroid.show('Successfully added',ToastAndroid.SHORT);
      });
    }
    catch(err){
      console.log(err);
    }
  }
    sd();
  }
  const cof = () => {
    var dat2 = parseInt(dat1) + 1;
    setdd1(String(dat2));
    const sd = async() => {
    try{
      await AsyncStorage.setItem('CO',String(dat2));
    }
    catch(err){
      console.log(err);
    }
  }
  sd();
  }
  const ml = async() => {
    try{
      await AsyncStorage.getItem('maths').then((res) => {
        if(res != null){
          setdd(res);
        }
      })
    }
    catch(err){
      console.log(err);
    }
  }
  const col = async() => {
    try{
      await AsyncStorage.getItem('CO').then((res) => {
        if(res != null){
          setdd1(res);
        }
      })
    }
    catch(err){
      console.log(err);
    }
  }
  const dasf = () => {
    var dat22 = parseInt(dat2) + 1;
    setdd2(String(dat22));
    const sd = async() => {
    try{
      await AsyncStorage.setItem('dsa',String(dat22));
    }
    catch(err){
      console.log(err);
    }
  }
  sd();
  }
  const dasl = async() => {
    try{
      await AsyncStorage.getItem('dsa').then((res) => {
        if(res != null){
          setdd2(res);
        }
      })
    }
    catch(err){
      console.log(err);
    }
  }
  const pplf = () => {
    var dat22 = parseInt(dat3) + 1;
    setdd3(String(dat22));
    const sd = async() => {
    try{
      await AsyncStorage.setItem('ppl',String(dat22));
    }
    catch(err){
      console.log(err);
    }
  }
  sd();
  }
  const ppll = async() => {
    try{
      await AsyncStorage.getItem('ppl').then((res) => {
        if(res != null){
          setdd3(res);
        }
      })
    }
    catch(err){
      console.log(err);
    }
  }
  const dsf = () => {
    var dat22 = parseInt(dat4) + 1;
    setdd4(String(dat22));
    const sd = async() => {
    try{
      await AsyncStorage.setItem('ds',String(dat22));
    }
    catch(err){
      console.log(err);
    }
  }
  sd();
  }
  const dsl = async() => {
    try{
      await AsyncStorage.getItem('ds').then((res) => {
        if(res != null){
          setdd4(res);
          console.log('ppl' + dat4);
        }
      })
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    ml();
    col();
    dasl();
    dsl();
    ppll();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style = {styles.main}>
         <Card subject={'Maths'} percentage = {String(dat) || '0'} done = {false} clickhandle={mf} code = {'0'}/>
         <Card subject={'Computer Organization'} percentage = {String(dat1) ||'0'} done = {false} clickhandle={cof} code = {'1'}/>
         <Card subject={'Data structures'} percentage = {String(dat2) || '0'} done = {false} clickhandle={dasf} code = {'2'}/>
         <Card subject={'PPL'} percentage = {String(dat3) || '0'} done = {false} clickhandle={pplf} code = {'3'}/>
         <Card subject={'Digital systems'} percentage = {String(dat4) ||'0'} done = {false} clickhandle={dsf} code = {'4'}/>
         <Button title = "reset"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : 40,
  },
  main : {
    display : 'flex',
  }
});
