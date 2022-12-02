import { StyleSheet, View } from 'react-native';
import { Header } from './components/Header';
import { List } from './components/List';
import { NewTask } from './components/NewTask';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <NewTask></NewTask>
      <List></List>
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
});