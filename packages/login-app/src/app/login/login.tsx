import React, { useState } from 'react';

import { View, Alert, TextInput, Button, StyleSheet } from 'react-native';

/* eslint-disable-next-line */
export interface LoginProps {}

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor ingrese su email y contraseña');
    } else {
      // Aquí iría la lógica de autenticación con el backend
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        // autoCompleteType="email"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
});

export default Login;
