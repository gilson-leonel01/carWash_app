import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ServiceBookedScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service Booked Successfully</Text>
      <Text style={styles.subtitle}>Mark as read</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.buttonText}>✓</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#800080', borderRadius: 25, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 24 },
});

export default ServiceBookedScreen;