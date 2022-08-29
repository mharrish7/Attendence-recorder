import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

  return (
    <View style = {styles.header}>
        <Text style = {styles.title}>Attendence Recorder</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    backgroundColor : '#2FA4FF',
    height : 80,
    justifyContent : 'center',
    alignItems : 'center',
  },
  title : {
    fontSize : 30,
    fontWeight : 'bold',
    color : '#fff',
  }
});
