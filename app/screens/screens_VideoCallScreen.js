import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VideoCallScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/200' }}
        style={styles.image}
      />
      <Text style={styles.title}>Jenny Wilson</Text>
      <Text style={styles.subtitle}>12:00</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📹</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 20 },
  image: { width: 200, height: 200, marginBottom: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20 },
  button: { backgroundColor: '#800080', borderRadius: 25, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 24 },
});

export default VideoCallScreen;