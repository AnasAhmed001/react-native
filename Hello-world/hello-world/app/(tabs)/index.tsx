import { View, Text } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={{
      backgroundColor: 'gray',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
     }}>
      <Text style={{
          color: 'white',
          fontSize: 30
        }}>hello world</Text>
    </View>
  )
}

export default index