import * as React from 'react';
import { Button, Pressable, View, Text, StyleSheet } from 'react-native';
export function DetailsScreen({ route,navigation }) {
    const { itemId, otherParam } = route.params;
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>     
        <Button title="Go to   Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go to Camera" onPress={() => navigation.navigate('Camera',{
              itemId: 90,
              otherParam: '',
            } )} />
      </View>
    );
  }