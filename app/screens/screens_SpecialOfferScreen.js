import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SpecialOfferScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>#SpecialForYou</Text>
      <Text style={styles.subtitle}>Get Special Offer Up to 40%</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/200' }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PopularProvider')}>
        <Text style={styles.buttonText}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 },
  image: { width: 200, height: 200, marginBottom: 20 },
  button: { backgroundColor: '#800080', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 25 },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default SpecialOfferScreen;