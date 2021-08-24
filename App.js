import 'react-native-gesture-handler'
import React from 'react'
import { Image, StatusBar, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { ContainerNav } from './src/navigation/ContainerNav';

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#FF1436' />
      <View style={styles.container}>
        <Image style={{ width: 125, height: 49 }} source={{ uri: 'http://s3.amazonaws.com/chiper/wp-content/uploads/2018/02/28141911/logo-chiper1.png' }} />
      </View>
      <ContainerNav />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#FF1436'
  }
})