import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CompleteProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Your Profile</Text>
      <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#666" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#666" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SpecialOffer')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.terms}>Agree with Terms & Conditions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '100%', height: 50, borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10, color: '#000' },
  button: { backgroundColor: '#800080', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 25, marginBottom: 20 },
  buttonText: { color: '#fff', fontSize: 16 },
  terms: { color: '#800080', fontSize: 14 },
});

export default CompleteProfileScreen;