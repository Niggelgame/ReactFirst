import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (

    <View style={{ padding: 30 }} >

      <View>
        <TextInput placeholder="Ziel" style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />
        <Button title="ADD" />
      </View>

      <View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

});
