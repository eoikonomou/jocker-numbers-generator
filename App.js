import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function generate() {
  return {
    uniqueNumbers: () => {
      let numbers = [];
      // 1 - 45
      while (numbers.length < 5) {
        let newNumber = Math.ceil(Math.random() * 45);
        if (!numbers.includes(newNumber)) {
          numbers.push(newNumber);
        }
      }
      return numbers;
    },
    jocker: () => {
      return Math.ceil(Math.random() * 20);
    }
  }
}

export default class App extends React.Component {

  state = {
    numbers: [],
    jocker: null
  }

  getMessage = () => {
    if (this.state.numbers.length === 0) {
      return 'Πάτα το κουμπί για να πάρεις τους αριθμούς σου για το Jocker!';
    } else {
      return 'Καλή τύχη!';
    }
  }

  generateNumbers = () => {
    const numbers = generate().uniqueNumbers();
    const jocker = generate().jocker();

    this.setState({ numbers, jocker });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.getMessage()}</Text>
        <Text style={styles.holder}>
          {this.state.numbers.map(num => (<Text style={styles.number}>{num}</Text>))}
        </Text>
        <Text style={styles.holder}>
          <Text style={styles.jocker}>{this.state.jocker}</Text>
        </Text>
        <Button onClick={this.generateNumbers}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  holder: {
    textAlign: 'center',
  },
  number: {
    border: '5px solid lightblue',
    fontSize: 45,
  },
  jocker: {
    boder: '5px solid gold',
    fontSize: 55,
  }
});
