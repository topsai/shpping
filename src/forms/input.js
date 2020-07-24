import React from 'react'
import {Text, View, TextInput} from 'react-native'

const Input = ({label})=>{
  return(
      <View>
          <Text>{label}</Text>
          <TextInput/>
      </View>
  )
};