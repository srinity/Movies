import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { MoviesScreen } from '../Screens'

const Stack = createStackNavigator()

class AppNavigation extends Component {
  render() {
    return (
      <View style={styles.wrapperViewContainerStyle}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Movies" component={MoviesScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapperViewContainerStyle: {
    flex: 1
  }
})

export default AppNavigation
