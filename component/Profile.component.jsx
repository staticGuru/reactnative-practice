import React from "react";

import * as SMS from 'expo-sms';
import SmsRetriever from 'react-native-sms-retriever';
import { View, StyleSheet,Image,Text, Button} from "react-native";

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"lightskyblue",
  },
  image: {
    height: 200,
    width: 200,
    marginTop:50,
    borderRadius:100,
    
   
  },
  text:{
    fontSize:30,
    color:'blue',
    fontWeight:'bold',

  }
});

const Profile = () => {
  // const isAvailable = await SMS.isAvailableAsync();
// if (isAvailable) {
//   console.log(isAvailable,"isAvailabledddd")
//   // do your SMS stuff here
// } else {
//   // misfortune... there's no SMS available on this device
//   console.log(isAvailable,"isAvailabledddd")

// }
React.useEffect(()=>{
  console.log("isAvailable")
  viewsms();
  
},[])

// Get the SMS message (second gif)
const SmsListenerPressed = async () => {
  // try {
  //   const registered = await SmsRetriever.startSmsRetriever();
  //   if (registered) {
  //     SmsRetriever.addSmsListener(event => {
  //       console.log(event.message);
  //       SmsRetriever.removeSmsListener();
  //     }); 
  //   }
  // } catch (error) {
  //   console.log(JSON.stringify(error));
  // }
};
const PhoneNumberPressed = async () => {
  // try {
  //   const phoneNumber = await SmsRetriever.requestPhoneNumber();
  //   console.log(phoneNumber,"phoneNumber")
  // } catch (error) {
  //   console.log(JSON.stringify(error));
  // }
 };
async function viewsms(){

  // const isAvailable = await SMS.isAvailableAsync();
  // if (isAvailable) {
  //   // do your SMS stuff here
  //   return console.log(isAvailable)
  // } else {
 
  //   // misfortune... there's no SMS available on this device
  // }
 
}

    
    
  return (
    <View style={styles1.container}>
      <Image style={styles1.image} source={require('../assets/malar.jpg')}/>
      <Text style={styles1.text}>Student Name: xxxx</Text>
      <Text style={styles1.text}>Student Dept: yyyy</Text>
      <Text style={styles1.text}>Student DOB: dd/mm/yyyy</Text>
      <Button onPress={PhoneNumberPressed}>phoneNumber</Button>
      <Button onPress={SmsListenerPressed}>SmsListenerPressed</Button>
    </View>
  );
};

export default Profile;
