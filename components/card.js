import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function Card({subject , percentage, done, clickhandle , code}) {

  return (
    <View style = {styles.header}>
        <Text style = {styles.title}>{subject}</Text>
        <Text>Attendence percentage : {percentage}</Text>
        <TouchableOpacity style = {styles.but}>
            <Button title='Give attendence' color = 'coral'  disabled = {done} onPress = {() => clickhandle()}/>
        </TouchableOpacity>
        
    </View>
  )
}

const styles = StyleSheet.create({
  header : {
    backgroundColor : 'rgb(200,200,200,0.5)',
    marginTop : 25,
    alignItems : 'center',
  },
  title: {
    fontSize : 16,
    fontWeight : 'bold',
    marginBottom : 5,
  },
  but : {
    // paddingHorizontal : 50,
    marginTop : 5,
  }
});
