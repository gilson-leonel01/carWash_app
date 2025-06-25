import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#666" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#666" secureTextEntry />
      <TouchableOpacity style={styles.forgot}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VerifyCode')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <Text style={styles.orText}>Or sign in with</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity><Text>🍎</Text></TouchableOpacity>
          <TouchableOpacity><Text>📧</Text></TouchableOpacity>
          <TouchableOpacity><Text>🌐</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '100%', height: 50, borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10, color: '#000' },
  forgot: { alignSelf: 'flex-end', marginBottom: 20 },
  forgotText: { color: '#800080', fontSize: 14 },
  button: { backgroundColor: '#800080', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 25, marginBottom: 20 },
  buttonText: { color: '#fff', fontSize: 16 },
  orContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  orText: { color: '#666', marginHorizontal: 10 },
  socialButtons: { flexDirection: 'row' },
});

export default SignInScreen;