import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const achievementFieldWidth = width - 32;

const AchievementField = ({ сomponentTitle }: { сomponentTitle: string }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text>
                    {сomponentTitle}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 6,
    },
    inputContainer: {
        height: 64,
        width: achievementFieldWidth,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 16,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
});

export default AchievementField;
