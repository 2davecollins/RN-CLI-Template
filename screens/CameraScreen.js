import * as React from 'react';
import { Button, Pressable, View, Text, StyleSheet } from 'react-native';


export function CameraScreen({ route, navigation }) {
    const { itemId, otherParam } = route.params;
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Camera Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>     
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go to Detail" onPress={() => navigation.navigate('Details', { itemId:70, otherParam:'dave'})} />
      </View>
    );
  }
  