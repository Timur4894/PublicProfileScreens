import React from "react";
import { StyleSheet, View, Text } from "react-native";

const RewardItem = () => {
    return (
        <View style={styles.container}>
            {/* Ваш контент здесь */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 128,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RewardItem;
