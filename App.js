import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Alert, Text, View } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const [headline, setHeadline] = useState('Guess a number between 1-100');
  const [guesses, setGuesses] = useState(1);
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);

  const numberMatch = () => {
    setGuesses(guesses + 1);

    if (parseInt(text) == answer) {
      Alert.alert('You guessed the number in ' + guesses + ' guesses');

      //Game reset on correct answer
      setGuesses(1);
      setAnswer(Math.floor(Math.random() * 100) + 1);
      setHeadline('Guess a new number between 1-100');
      setText('');

    }
    if (parseInt(text) > answer) {
      setHeadline('Your guess of ' + text + ' is too high');
    }
    if (parseInt(text) < answer) {
      setHeadline('Your guess of ' + text + ' is too low');
    }
  }

  return (
    <View style={styles.container}>
      <Text>{headline}</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={text => setText(text)}
        value={text}
      />

      <Button
        style={styles.button}
        onPress={numberMatch}
        title="Make a guess!" 
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 150,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5
  }
});
