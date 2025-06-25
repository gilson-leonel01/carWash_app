import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VerifyCodeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Code</Text>
      <Text style={styles.subtitle}>Please enter the code we sent to example@email.com</Text>
      <View style={styles.codeInputs}>
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="numeric" />
      </View>
      <TouchableOpacity style={styles.resend}>
        <Text style={styles.resendText}>Didn't receive OTP? Resend Code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CompleteProfile')}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 },
  codeInputs: { flexDirection: 'row', justifyContent: 'space-between', width: '60%', marginBottom: 20 },
  codeInput: { width: 50, height: 50, borderWidth: 1, borderColor: '#ccc', textAlign: 'center', fontSize: 20 },
  resend: { marginBottom: 20 },
  resendText: { color: '#800080', fontSize: 14 },
  button: { backgroundColor: '#800080', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 25 },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default VerifyCodeScreen;