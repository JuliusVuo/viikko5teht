import Map from './screens/Map';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Map/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS ==='android' ? StatusBar.currentHeight : 0
  },
});
