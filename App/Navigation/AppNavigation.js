import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { MoviesScreen } from '../Screens'

import { MoviesActions } from '../Store/Actions'

const Stack = createStackNavigator()

class AppNavigation extends Component {
  constructor(props) {
    super(props)

    this.ConnectedComponents = {
      Movies: connect(
        ({ movies, genres }) => {
          const { genreList } = genres

          return { ...movies, genreList }
        },
        dispatch => {
          return {
            ...bindActionCreators(MoviesActions, dispatch)
          }
        }
      )(MoviesScreen)
    }
  }

  render() {
    const { ConnectedComponents } = this

    return (
      <View style={styles.wrapperViewContainerStyle}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen
              name="Movies"
              component={ConnectedComponents.Movies}
            />
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
