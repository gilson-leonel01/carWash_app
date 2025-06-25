import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExploreScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Car Wash Services by Interactive Map</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/200' }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>›</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 18, textAlign: 'center', marginBottom: 20 },
  image: { width: 200, height: 200, marginBottom: 20 },
  button: { backgroundColor: '#800080', borderRadius: 25, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 24 },
  skipButton: { position: 'absolute', top: 20, right: 20 },
  skipText: { color: '#800080', fontSize: 16 },
});

export default ExploreScreen;