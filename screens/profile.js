import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StyleButton from '../components/StyleButton';

import { signOut } from 'firebase/auth';
import authentication from '../components/firebase';



const Profile = ({navigation}) => {

 const SignOutUser=() =>{
   signOut(authentication)
   .then((re)=>{
     console.log(re)
    navigation.reset({
      index: 0,
      routes: [{ name: 'login' }],
    });
   })
   .catch((err)=>{
    console.warn(err)
   })
 }

  return (
    <View>
   <StyleButton 
     type="primary"
     content={"Logout"}
     onPress ={() => {
                //     console.warn(data.email,data.password),
                   navigation.navigate('login')}}
   />
     </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
