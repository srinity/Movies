import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { Screen, Tabs } from '../../Components'

import styles from './Movies.Styles'

const TABS_DATA = [
  { label: 'Upcoming' },
  { label: 'Popular' },
  { label: 'Top Rated' }
]

class Movies extends Component {
  componentDidMount() {
    const { getUpcomingMovies, genreList } = this.props
    getUpcomingMovies(genreList, 1)
  }

  render() {
    console.tron.warn(this.props)
    return (
      <Screen title="Movies">
        <Tabs data={TABS_DATA}>
          <Tabs.Tab index={0}>
            <View style={styles.containerStyle}>
              <Text>Upcoming Movies Screen</Text>
            </View>
          </Tabs.Tab>

          <Tabs.Tab index={1}>
            <View style={styles.containerStyle}>
              <Text>Popular Movies Screen</Text>
            </View>
          </Tabs.Tab>

          <Tabs.Tab index={2}>
            <View style={styles.containerStyle}>
              <Text>Top Rated Movies Screen</Text>
            </View>
          </Tabs.Tab>
        </Tabs>
      </Screen>
    )
  }
}

Movies.propTypes = {
  getUpcomingMovies: PropTypes.func,
  getPopularMovies: PropTypes.func,
  getTopRatedMovies: PropTypes.func,
  genreList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  )
}

export default Movies
