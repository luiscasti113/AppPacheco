import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Button, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {RegisterStyle} from '../styles/Register'
import * as ImagePicker from 'expo-image-picker';



export default function Register() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

    // Función para manejar la navegación a la pantalla de Registro
    const handleSignUpPressLogin = () => {
        navigation.navigate('Login');
    };
  return (
    <SafeAreaView style={RegisterStyle.container}>

  <View style={RegisterStyle.secondSection}>

      <View>

      <View style={RegisterStyle.spacing}>
        <Text style={RegisterStyle.signupTop}>Registrate </Text>
        <Text style={RegisterStyle.signupBottom}>Para crear una cuenta nueva.</Text>  
      </View>

      <View style={RegisterStyle.spacing}>
      {image && <Image source={{ uri: image }} style={ RegisterStyle.iconoPerfil } />}
      </View>
      
      <View style={RegisterStyle.spacing}>
          <Text style={RegisterStyle.label} >Name</Text>
          <TextInput 
              style={RegisterStyle.textInput}
              underlineColorAndroid={"transparent"}
              placeholder="Luisitec" 
              returnKeyType="next"
          />  
      </View>

      <View style={RegisterStyle.spacing}>
          <Text style={RegisterStyle.label} >Email Address</Text>
          <TextInput 
              style={RegisterStyle.textInput}
              underlineColorAndroid={"transparent"}
              placeholder="ejemplo@ejemplo.com" 
              keyboardType="email-address"
              returnKeyType="next"
          />  
      </View>


      <View style={RegisterStyle.spacing}>
          <Text style={RegisterStyle.label} >Password</Text>
          <TextInput 
              style={RegisterStyle.textInput}
              underlineColorAndroid={"transparent"}
              placeholder="*******" 
              secureTextEntry={true}
          />
      </View>


      <View style={RegisterStyle.spacing}>
          <Text style={RegisterStyle.label} >Password</Text>
          <TextInput 
              style={RegisterStyle.textInput}
              underlineColorAndroid={"transparent"}
              placeholder="Confirm Password" 
              secureTextEntry={true}
          />
      </View>

      <View style={RegisterStyle.spacing}>
          <TouchableOpacity style={RegisterStyle.button}>
                  <Text onPress={pickImage} style={RegisterStyle.buttonText}>Selecciona una foto de galería</Text>
          </TouchableOpacity>
      </View>

      <View style={RegisterStyle.spacing}>
          <TouchableOpacity style={RegisterStyle.button}>
                  <Text style={RegisterStyle.buttonText}>Next</Text>
          </TouchableOpacity>
      </View>

    </View>


  <View style={[RegisterStyle.spacing, RegisterStyle.row]}>
    <Text style={RegisterStyle.label}>Already have an account?</Text>
    <TouchableOpacity onPress={handleSignUpPressLogin}>
        <Text style={RegisterStyle.login}>Login</Text>
    </TouchableOpacity>
  </View>

  </View>

    </SafeAreaView>

  );
}

