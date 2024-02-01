import { View, Text } from 'react-native'
import React from 'react'
import BottomTabNavigator from './BottomTabNavigation'
import SoundsNavigation from './SoundsNavigation'

const RootNavigation = () => {
  return (
    <>
    <BottomTabNavigator />
    <SoundsNavigation />
    </>
  )
}

export default RootNavigation