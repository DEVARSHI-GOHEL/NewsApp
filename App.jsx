import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { store } from './src/redux/store';
import { Provider } from 'react-redux'

export default App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})