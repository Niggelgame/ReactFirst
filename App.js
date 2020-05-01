import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]);


  const addGoalHandler = goalTitle => {
    setGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }]);
  };

  return (

    <View style={styles.screen} >
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList keyExtractor={(item, index) => item.key} data={goals} renderItem={itemData => <GoalItem onDelete={() => console.log('sicher?')} title={itemData.item.value} />} />

    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    marginTop: '5 %',
    marginBottom: '-5%',
  },
});

