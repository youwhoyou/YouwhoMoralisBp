import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useMoralis } from "react-moralis"

export default function App() {
    const { user } = useMoralis();

    return (
        <View style={styles.container}>
            <Pressable>
                <Text>{user && "yes user"}</Text>
                <Text>{!user && "no user"}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({ container: { flex: 1, alignItems: "center", justifyContent: "center" } })