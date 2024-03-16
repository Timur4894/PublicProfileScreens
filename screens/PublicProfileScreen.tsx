import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import SvgComponent from "../components/svg/ImageCircle";
import AchievementField from "../components/UI/AchievementField";
import RewardItem from "../components/UI/RewardItem";

const { width } = Dimensions.get('window');
const containerWidth = width - 32;

function PublicProfileScreen(){

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.profileInfo}>
                <View>
                    <SvgComponent/>
                </View>

                <View>
                    <Text style={styles.personName}>
                        @gretch_tis
                    </Text>
                </View>
            </View>

            <View style={styles.personalAchievements}>
                <AchievementField сomponentTitle='Global Rank'/>
                <AchievementField сomponentTitle='Continent Rank'/>
                <AchievementField сomponentTitle='Points' />
            </View>

            <View style={styles.solvedRiddlesContainer}>
                <Text>
                    Solved Riddles
                </Text>
            </View>

            <View style={styles.allRewards}>
                <View style={styles.rewardsTopText}>
                    <Text>
                        Rewards
                    </Text>

                    <Text>
                        See all
                    </Text>
                </View>

                <ScrollView horizontal>
                    <RewardItem/>
                    <RewardItem/>
                    <RewardItem/>
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    profileInfo: {
        marginTop: 8
    },
    personName: {
        fontFamily: 'Nunito_700Bold',
        marginTop: 12
    },
    personalAchievements: {
        marginTop: 18
    },
    solvedRiddlesContainer: {
        marginTop: 12,
        height: 116,
        width: containerWidth,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 16,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    allRewards: {
        marginTop: 40,
    },
    rewardsTopText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: containerWidth,
        marginBottom: 16
    }
});

export default PublicProfileScreen;
