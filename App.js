import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AppNavigation from './App/Navigation/AppNavigation'
import store, { persistor } from './App/Store'

import { Colors } from './App/Theme'

class App extends Component {
  renderLoading = () => (
    <View style={styles.indicatorContainerStyle}>
      <ActivityIndicator color={Colors.brandColor} size="large" />
    </View>
  )

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={this.renderLoading()} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  indicatorContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App
