import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function Card({subject , percentage, done, clickhandle,click2,percentage2}) {

  return (
    <View style = {styles.header}>
        <Text style = {styles.title}>{subject} - {Math.floor((percentage / (parseInt(percentage) + parseInt(percentage2)))*100)} %</Text>
        <Text>Classes Attended : {percentage} / {parseInt(percentage) + parseInt(percentage2)} </Text>
        <View style = {styles.butt}>
        <TouchableOpacity style = {styles.but}>
            <Button title='Add attendence' color = '#7DCE13'  disabled = {done} onPress = {() => clickhandle()}/>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.but}>
            <Button title='Add missed' color = '#E64848'  disabled = {done} onPress = {() => click2()}/>
        </TouchableOpacity>
        </View>
        
        
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
    marginTop : 10,
    display : 'flex',
    marginHorizontal : 10,
  },
  butt : {
    display : 'flex',
    flexDirection : 'row',
  }
});
