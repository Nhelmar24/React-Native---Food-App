import React from "react";
import { StyleSheet, TextInput, View, Text, Image, Button } from "react-native";

const UselessTextInput = () => {
  const [email, onChangeEmail] = React.useState(null);
  const [upass, onChangeUpass] = React.useState(null);

  return (
    <View style={styles.content}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logoWhite.png')}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>FOOD APP</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeUpass}
        value={upass}
        placeholder="Password"
      />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  
  content:{
    margin:20,
    marginTop:100,
  },
  headerContainer:{
    alignItems:'center',
    justifyContent: 'center',
  },
  logoContainer:{
    alignItems:'center',
    justifyContent: 'center',
    padding:20,
  },
  logo:{
    width:100,
    height: 100,
  },
  header:{
    margin: 12,
    fontSize:24,
    alignItems:'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button:{
    backgroundColor: 'red',
    borderRadius: 50,
  },
  buttonContainer:{
    padding: 10,
    
  }
});

export default UselessTextInput;