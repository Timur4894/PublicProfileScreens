import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { COLORS } from "../../constants/Colors"; 

const { width } = Dimensions.get('window');
const achievementFieldWidth = width - 32;

interface AchievementFieldProps {
    сomponentTitle: string;
    backgroundColor: string;
    value: number;
    svgComponent: React.ReactNode;
}

const AchievementField = ({ сomponentTitle, backgroundColor, value, svgComponent } : AchievementFieldProps) => {
    return (
        <View style={styles.container}>
            <View style={[styles.fieldContainer, {backgroundColor, borderColor: backgroundColor}]}>
                {svgComponent}
                <View style={styles.infoContainer}>
                    <Text style={styles.titleStyle}>
                        {сomponentTitle}
                    </Text>
                    <Text style={styles.valueStyle}>
                        {value}
                    </Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 6,
    },
    fieldContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 64,
        width: achievementFieldWidth,
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 16,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginLeft: 16
    },
    titleStyle: {
        fontFamily: 'Nunito_700Bold',
        color: COLORS.white,
    },
    valueStyle: {
        fontFamily: 'Nunito_700Bold',
        color: COLORS.white,
        textAlign: 'right'
    }
});

export default AchievementField;
