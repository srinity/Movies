import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    setItem: () => {},
    getItem: () => {},
    removeItem: () => {}
  }
})

jest.mock('@react-native-community/netinfo', () => {
  return {
    fetch: async () => ({ isConnected: true }),
    addEventListener: () => {}
  }
})
