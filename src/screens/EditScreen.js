import React from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'

const EditScreen = ({ navigation }) => {
  return (
    <Text>Edit Screen - {navigation.getParam('id')}</Text>
  )
}

const styles = StyleSheet.create({
    
})

export default EditScreen