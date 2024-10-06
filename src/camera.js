import React, { Component } from 'react'
import { StyleSheet, View, Alert, Text } from 'react-native'
import { RNCamera } from 'react-native-camera'

class a extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'black', alignItems: 'center', justifyContent: 'center' }}>Capture</Text>

                <RNCamera
                    style={{ flex: 1, alignItems: 'center' }}
                    ref={ref => {
                        this.camera = ref
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
})

export default a