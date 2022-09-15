import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import uuid from 'react-native-uuid';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid.v4(),
      text: 'Milk',
    },
    {
      id: uuid.v4(),
      text: 'Eggs',
    },
    {
      id: uuid.v4(),
      text: 'Bread',
    },
    {
      id: uuid.v4(),
      text: 'Juice',
    },
  ]);

  console.log(items);

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
