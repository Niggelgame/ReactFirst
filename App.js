import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
  };

  return (

    <View style={styles.screen} >

      <View style={styles.inputContainer} >
        <TextInput placeholder="Ziel" style={styles.input} onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>

      <FlatList keyExtractor={(item, index) => item.key} data={goals} renderItem={itemData => (<View style={styles.listItem}>
        <Text>{itemData.item.value}</Text></View>)} />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    marginTop: '5 %',
    marginBottom: '-5%',
  },
  inputContainer: {
    flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems: 'center'
  },

  input: {
    width: '75%', borderColor: 'black', borderWidth: 1, padding: 6,
  },

  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  },

});
