import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GetDirectionScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/300' }}
        style={styles.image}
      />
      <Text style={styles.title}>Washing Center Location</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 20 },
  image: { width: 300, height: 300, marginBottom: 20 },
  title: { fontSize: 24, marginBottom: 10 },
});

export default GetDirectionScreen;