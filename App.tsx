import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Demo1/Demo11'
import L22 from './lab1/L22'
import Baitap from './lab1/baitap'
const App = () => {
  return (
    <View style={styles.bg}>
      <Text><Baitap/></Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  bg:{
    backgroundColor:'#dcdcdc',
    flex:1
}
})