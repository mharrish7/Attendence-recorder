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

  const [mdat,msetdd] = useState(0);
  const [mdat1,msetdd1] = useState(0);
  const [mdat2,msetdd2] = useState(0);
  const [mdat3,msetdd3] = useState(0);
  const [mdat4,msetdd4] = useState(0);
  
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
      ToastAndroid.show('Successfully added',ToastAndroid.SHORT);
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
      ToastAndroid.show('Successfully added',ToastAndroid.SHORT);
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
      ToastAndroid.show('Successfully added',ToastAndroid.SHORT);
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
      ToastAndroid.show('Successfully added',ToastAndroid.SHORT);
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

  const mmf = () => {
    var mdat2 = parseInt(mdat) + 1;
    msetdd(String(mdat2));
    const sd = async() => {
    try{
      await AsyncStorage.setItem('mmaths',String(mdat2)).then(() => {
        ToastAndroid.show('Successfully added',ToastAndroid.SHORT);
      });
    }
    catch(err){
      console.log(err);
    }
  }
    sd();
  }
  const mcof = () => {
    var mdat2 = parseInt(mdat1) + 1;
    msetdd1(String(mdat2));
    const sd = async() => {
    try{
      await AsyncStorage.setItem('mCO',String(mdat2));
      ToastAndroid.show('Successfully added',ToastAndroid.SHORT);
    }
    catch(err){
      console.log(err);
    }
  }
  sd();
  }
  const mml = async() => {
    try{
      await AsyncStorage.getItem('mmaths').then((res) => {
        if(res != null){
          msetdd(res);
        }
      })
    }
    catch(err){
      console.log(err);
    }
  }
  const mcol = async() => {
    try{
      await AsyncStorage.getItem('mCO').then((res) => {
        if(res != null){
          msetdd1(res);
        }
      })
    }
    catch(err){
      console.log(err);
    }
  }
  const mdasf = () => {
    var mdat22 = parseInt(mdat2) + 1;
    msetdd2(String(mdat22));
    const sd = async() => {
    try{
      await AsyncStorage.setItem('mdsa',String(mdat22));
      ToastAndroid.show('Successfully added',ToastAndroid.SHORT);
    }
    catch(err){
      console.log(err);
    }
  }
  sd();
  }
  const mdasl = async() => {
    try{
      await AsyncStorage.getItem('mdsa').then((res) => {
        if(res != null){
          msetdd2(res);
        }
      })
    }
    catch(err){
      console.log(err);
    }
  }
  const mpplf = () => {
    var mdat22 = parseInt(mdat3) + 1;
    msetdd3(String(mdat22));
    const sd = async() => {
    try{
      await AsyncStorage.setItem('mppl',String(mdat22));
      ToastAndroid.show('Successfully added',ToastAndroid.SHORT);
    }
    catch(err){
      console.log(err);
    }
  }
  sd();
  }
  const mppll = async() => {
    try{
      await AsyncStorage.getItem('mppl').then((res) => {
        if(res != null){
          msetdd3(res);
        }
      })
    }
    catch(err){
      console.log(err);
    }
  }
  const mdsf = () => {
    var mdat22 = parseInt(mdat4) + 1;
    msetdd4(String(mdat22));
    const sd = async() => {
    try{
      await AsyncStorage.setItem('mds',String(mdat22));
      ToastAndroid.show('Successfully added',ToastAndroid.SHORT);
    }
    catch(err){
      console.log(err);
    }
  }
  sd();
  }
  const mdsl = async() => {
    try{
      await AsyncStorage.getItem('mds').then((res) => {
        if(res != null){
          msetdd4(res);
          console.log('ppl' + mdat4);
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
    mml();
    mcol();
    mdasl();
    mdsl();
    mppll();
  }, []);

  const reset = () => {
    setdd(0);
    setdd1(0);
    setdd2(0);
    setdd3(0);
    setdd4(0);
    msetdd(0);
    msetdd1(0);
    msetdd2(0);
    msetdd3(0);
    msetdd4(0);
  }


  return (
    <View style={styles.container}>
      <Header />
      <View style = {styles.main}>
         <Card subject={'Maths'} percentage = {parseInt(dat) || '0'} percentage2 = {parseInt(mdat) || '0'}  clickhandle={mf} click2 = {mmf} />
         <Card subject={'Computer Organization'} percentage = {parseInt(dat1) ||'0'} percentage2 = {parseInt(mdat1) ||'0'}  clickhandle={cof} click2 = {mcof} />
         <Card subject={'Data structures'} percentage = {parseInt(dat2) || '0'} percentage2 = {parseInt(mdat2) || '0'} clickhandle={dasf} click2 = {mdasf} />
         <Card subject={'PPL'} percentage = {parseInt(dat3) || '0'} percentage2 = {parseInt(mdat3) || '0'} clickhandle={pplf} click2 = {mpplf} />
         <Card subject={'Digital systems'} percentage = {parseInt(dat4) ||'0'} percentage2 = {parseInt(mdat4) ||'0'} clickhandle={dsf} click2 = {mdsf} />
         <View style = {styles.reset}>
              <Button title = "reset" onPress={reset}></Button>
         </View>
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
  },
  reset : {
    position : 'absolute',
    right : 5,
    top : 5,
  },
});
