
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid
} from 'react-native';
import messaging from '@react-native-firebase/messaging';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);


const App = () => {

  const getDeviceToken = async () => {
    let DeviceToken = await messaging().getToken();  
    console.log('DeviceToken', DeviceToken)
  };

  

  useEffect(() => {
    getDeviceToken();
  }, []);

  return (
    <View style={{flex:1}}>
     <Text style={{color:'black'}}>Push Notification</Text>
    </View>
  );
}

export default App;
