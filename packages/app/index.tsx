import React from 'react'
import { Provider } from 'react-redux'
import { TamaguiProvider, Theme } from 'tamagui'
import { useFonts } from 'expo-font'
import { store } from './store/store'
import config from '../config/dist'
import { HomeScreen } from './screens/HomeScreen'

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <Provider store={store}>
      <TamaguiProvider config={config}>
        <Theme name="light">
          <HomeScreen />
        </Theme>
      </TamaguiProvider>
    </Provider>
  )
}
