import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const JourneyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <Text style={styles.title}>Journey to a Gleaming Start</Text>
      <Text style={styles.subtitle}>Let's get started</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Explore')}>
        <Text style={styles.buttonText}>›</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  image: { width: 150, height: 150, marginBottom: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#800080', borderRadius: 25, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 24 },
});

export default JourneyScreen;