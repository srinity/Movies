import React, { Component } from 'react'
import {
  View,
  Animated,
  Easing,
  ViewPropTypes,
  TouchableOpacity
} from 'react-native'
import {
  map as _map,
  isString as _isString,
  isFunction as _isFunction
} from 'lodash'
import PropTypes from 'prop-types'

import { AnimatedLabel } from '../Label'

import { Colors } from '../../Theme'

import Tab from './Tab'

import styles from './Tabs.Styles'

class Tabs extends Component {
  static Tab = Tab

  constructor(props) {
    super(props)
    this.indicators = _map(props.data, (_, index) => {
      return new Animated.Value(index === props.initialActiveTab ? 1 : 0)
    })

    this.state = {
      activeTab: props.initialActiveTab,
      tabSizes: {}
    }
  }

  handleActiveTab = (item, index) => {
    const { data, onSelectedTab } = this.props

    Animated.parallel([
      Animated.timing(this.indicators[index], {
        toValue: 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false
      }),
      Animated.timing(this.indicators[this.state.activeTab], {
        toValue: 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false
      })
    ]).start(({ finished }) => {
      if (finished) {
        this.setState({ activeTab: index })
        setTimeout(
          () => _isFunction(onSelectedTab) && onSelectedTab(item, index, data),
          0
        )
      }
    })
  }

  handleTabCellLayout = (index, event) => {
    const { width: cellWidth } = event.nativeEvent.layout
    this.setState({
      tabSizes: { ...this.state.tabSizes, [index]: cellWidth }
    })
  }

  renderTabs = () => {
    const {
      keyExtractor,
      renderTab,
      data,
      tabStyle,
      valueExtractor,
      activeTabColor
    } = this.props

    return _map(data, (item, index) => {
      const key = _isFunction(keyExtractor)
        ? keyExtractor(item)
        : `header-tab-${index}`
      const title = _isString(item) ? item : valueExtractor(item)

      const { accessibilityLabel = null } = item

      const backgroundColorStyle = {
        backgroundColor: this.indicators[index].interpolate({
          inputRange: [0, 1],
          outputRange: [Colors.getNotAvailableColor(1), activeTabColor]
        })
      }

      const colorStyle = {
        color: this.indicators[index].interpolate({
          inputRange: [0, 1],
          outputRange: [Colors.getBlackColor(1), Colors.getWhiteColor(1)]
        })
      }

      return (
        <Animated.View
          key={key}
          style={[
            styles.tab,
            data.length - 1 === index ? styles.lastTab : undefined,
            tabStyle,
            backgroundColorStyle
          ]}
        >
          {_isFunction(renderTab) ? (
            <TouchableOpacity
              onPress={() => this.handleActiveTab(item, index)}
              activeOpacity={1}
            >
              {renderTab(item, index, data)}
            </TouchableOpacity>
          ) : (
            <AnimatedLabel
              title={title}
              textStyle={[styles.label, colorStyle]}
              onPress={() => this.handleActiveTab(item, index)}
              activeOpacity={1}
              textAccessibilityLabel={accessibilityLabel}
            />
          )}
        </Animated.View>
      )
    })
  }

  renderHeader = () => {
    const { tabsStyle } = this.props
    return (
      <View style={[styles.headerContainer, tabsStyle]}>
        <View style={styles.mainView}>{this.renderTabs()}</View>
      </View>
    )
  }

  render() {
    const { containerStyle, children } = this.props
    const { activeTab } = this.state
    return (
      <View style={[styles.container, containerStyle]}>
        {this.renderHeader()}
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                activeTab,
                defaultIndex: index,
                length: React.Children.count(children)
              })
            : child
        )}
      </View>
    )
  }
}

Tabs.defaultProps = {
  initialActiveTab: 0,
  data: [],
  activeTabColor: Colors.getBrandColor(1),
  valueExtractor: item => item.label
}

Tabs.propTypes = {
  initialActiveTab: PropTypes.number,
  data: PropTypes.array.isRequired,
  renderTab: PropTypes.func,
  keyExtractor: PropTypes.func,
  valueExtractor: PropTypes.func,
  tabStyle: ViewPropTypes.style,
  tabsStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  activeTabColor: PropTypes.string,
  onSelectedTab: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  itemsCount: PropTypes.number
}

export default Tabs
