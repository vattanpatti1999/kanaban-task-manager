'use client'

import { Provider } from 'react-redux'
import { store } from '../../../packages/app/store/store'
import { HomeScreen } from '../../../packages/app/screens/HomeScreen'

export default function Home() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  )
}
