import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const achievementFieldWidth = width - 32;

const AchievementField = ({ сomponentTitle, backgroundColor, value }: { сomponentTitle: string, backgroundColor: string, value: any }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.inputContainer, {backgroundColor, borderColor: backgroundColor}]}>
                <Text style={styles.textStyle}>
                    {сomponentTitle}
                </Text>

                <Text style={styles.textStyle}>
                    {value}
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 64,
        width: achievementFieldWidth,
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 16,
    },
    textStyle: {
        fontFamily: 'Nunito_700Bold',
        color: '#fff'
    }
});

export default AchievementField;
