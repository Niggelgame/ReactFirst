import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [goals, setGoals] = useState([]);


  const addGoalHandler = goalTitle => {
    setGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (

    <View style={styles.screen} >
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList keyExtractor={(item, index) => item.key}
        data={goals} renderItem={itemData =>
          <GoalItem id={itemData.item.key}
            onDelete={removeGoalHandler}
            title={itemData.item.value} />}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    marginTop: '5 %',
    marginBottom: '-5%',
    height: '100%'
  },
});

