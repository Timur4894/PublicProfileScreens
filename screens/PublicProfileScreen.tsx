import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, Image, Pressable } from "react-native";
import AchievementField from "../components/UI/AchievementField";
import RewardItem from "../components/UI/RewardItem";
import Puzzle from "../assets/svg/Puzzle";
import VioletStar from "../assets/svg/VioletStar";
import BlueStar from "../assets/svg/BlueStar";
import Coin from '../assets/svg/Coin'
import { COLORS } from "../constants/Colors";

const { width } = Dimensions.get('window');
const containerWidth = width - 32;

interface Card {
    text: string;
    logo: string;
    backgroundColor: string;
  }
  
  interface UserData {
    photoPath: string;
    nickname: string;
    globalRank: number;
    continentRank: number;
    points: number;
    solvedRiddles: number;
    cards: {
      firstCard: Card;
      secondCard: Card;
      thirdCard: Card;
    };
  }
  
  function PublicProfileScreen() {
    const [userData, setUserData] = useState<UserData>({
      photoPath: "",
      nickname: "",
      globalRank: 0,
      continentRank: 0,
      points: 0,
      solvedRiddles: 0,
      cards: {
        firstCard: {
          text: "",
          logo: "",
          backgroundColor: "",
        },
        secondCard: {
          text: "",
          logo: "",
          backgroundColor: "",
        },
        thirdCard: {
          text: "",
          logo: "",
          backgroundColor: "",
        },
      },
    });
  
    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = require('../data/dummyData.json');
        setUserData(response);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };
    fetchData();

    return () => setUserData(null);
    }, []);

    return(
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
            {userData && (
                <View>
                    <View style={styles.profileInfo}>
                        <View style={styles.imageShadow}>
                            <View style={styles.circleContainer}> 
                            <Image
                                source={{ uri: userData.photoPath }}
                                style={styles.imageStyle} 
                            />
                            </View>
                        </View>
                        <Text style={styles.personName}>
                            @{userData.nickname}
                        </Text>
                    </View>
                    <View style={styles.personalAchievements}>
                        <AchievementField сomponentTitle='Global Rank' backgroundColor='#31AAFF' value={userData.globalRank} svgComponent={<BlueStar/>}/>
                        <AchievementField сomponentTitle='Continent Rank' backgroundColor='#71C47A' value={userData.continentRank} svgComponent={<VioletStar/>}/>
                        <AchievementField сomponentTitle='Points' backgroundColor='#FF5A5F' value={userData.points} svgComponent={<Coin/>}/>
                    </View>
                    <View style={styles.solvedRiddlesContainer}>
                        <Image
                            source={require('../assets/img/pinkBall.png')} 
                            style={styles.pinkCircleStyle}
                        />
                        <View style={{ flexDirection: 'column', alignItems: 'center',  }}>
                            <Text style={styles.solvedRiddlesText}>
                                Solved Riddles
                            </Text>
                            <View style={styles.resultField}>
                                <View style={{marginLeft: 16, marginRight: 8}}>
                                    <Puzzle/>
                                </View>
                                <Text style={styles.solvedRiddlesResult}>
                                    {userData.solvedRiddles}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.allRewards}>
                        <View style={styles.rewardsTopText}> 
                            <Text style={{fontFamily: 'Nunito_700Bold'}}>
                                Rewards
                            </Text>
                            <Pressable onPress={()=>{}}>
                                <Text style={styles.seeAllText}>
                                    See all
                                </Text>
                            </Pressable>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rewardCardsContainer}>
                            {userData.cards && Object.values(userData.cards).map((card, index) => (
                                <RewardItem
                                    key={index}
                                    text={card.text}
                                    logo={card.logo}
                                    backgroundColor={card.backgroundColor}
                                />
                            ))}
                        </ScrollView>
                    </View>
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      backgroundColor: COLORS.white
    },
    profileInfo: {
        marginTop: 8,
        alignItems: 'center'
    },
    personName: {
        fontFamily: 'Nunito_700Bold',
        marginTop: 12,
    },
    personalAchievements: {
        marginTop: 18
    },
    resultField: {
        flex: 0.6, 
        height: 40,
        borderRadius: 99, 
        backgroundColor: COLORS.scorePurpuleContainer, 
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16
    },
    circleContainer: {
        width: 84, 
        height: 84,
        borderRadius: 50, 
        backgroundColor: COLORS.circleBorder, 
        justifyContent: 'center', 
        alignItems: 'center', 
      },
    imageStyle: {
        width: 78, 
        height: 78,
        borderRadius: 40, 
      },
    pinkCircleStyle: {
        width: 68.03, 
        height: '100%',
      },
    solvedRiddlesText: {
        fontFamily: 'Nunito_700Bold',
        color: COLORS.white,
        marginBottom: 20,
        fontSize: 15 
      },
    solvedRiddlesResult: {
        fontFamily: 'Nunito_700Bold',
        color: COLORS.white,
        paddingRight: 16
      },
    seeAllText: {
        fontFamily: 'Nunito_700Bold',
        color: COLORS.purple,
      },
    solvedRiddlesContainer: {
        marginTop: 12,
        height: 116,
        width: containerWidth,
        backgroundColor: COLORS.purple,
        borderWidth: 1,
        borderColor: COLORS.purple,
        borderRadius: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
        flexDirection: 'row'
    },
    allRewards: {
        marginTop: 40,
        width: containerWidth,
    },
    rewardsTopText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: containerWidth,
        marginBottom: 16
    },
    rewardCardsContainer: {
        marginBottom: 24
    },
    imageShadow: {
        shadowColor: COLORS.circleShadow,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 0.1,
        elevation: 8, 
    }
});

export default PublicProfileScreen;
