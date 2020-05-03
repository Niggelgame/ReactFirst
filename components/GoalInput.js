import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer} >
                <TextInput placeholder="Ziel" style={styles.input} onChangeText={goalInputHandler}
                    value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.onCancel} /></View>
                    <View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        // Gesamte Fläche
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center'
    },

    input: {
        width: '75%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 6,
        marginBottom: 10,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
    },

    button: {
        width: '40%',
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
});

export default GoalInput;