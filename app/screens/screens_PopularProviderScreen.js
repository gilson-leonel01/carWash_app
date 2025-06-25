import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PopularProviderScreen = () => {
  const navigation = useNavigation();
  const providers = [
    { id: '1', name: 'ProGlow Auto Spa', rating: 4.5 },
    { id: '2', name: 'CrystalClear Car Wash', rating: 4.8 },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('BookService')}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.rating}>⭐ {item.rating}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Service Provider</Text>
      <FlatList
        data={providers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between' },
  name: { fontSize: 16 },
  rating: { fontSize: 16, color: '#666' },
  button: { backgroundColor: '#800080', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 25, alignSelf: 'center' },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default PopularProviderScreen;