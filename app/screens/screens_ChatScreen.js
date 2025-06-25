import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
  const navigation = useNavigation();
  const chats = [
    { id: '1', name: 'Karla Schoon', time: '08:24 PM' },
    { id: '2', name: 'Shyla Lemke', time: '08:23 PM' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Chat')}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between' },
  name: { fontSize: 16 },
  time: { fontSize: 14, color: '#666' },
});

export default ChatScreen;