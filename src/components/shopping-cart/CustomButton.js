import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CustomButton = ({style,title}) => {
    return (
        <Button style={style}>
          <Text style={styles.buttonTitle}>{title}</Text>
        </Button>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonTitle:{fontWeight: 'bold'}
})
