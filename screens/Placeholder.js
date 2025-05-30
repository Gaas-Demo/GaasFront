import { StyleSheet, View } from 'react-native';
import { Text, Icon } from 'react-native-paper';



export default function PlaceholderScreen() {
  return (
    <View style={styles.container}>
      <Text variant='headlineLarge'>placeholder</Text>
      <Icon source="access-point" size={30} color="red"></Icon>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
});