import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, Image, Pressable } from "react-native";
import AchievementField from "../components/UI/AchievementField";
import RewardItem from "../components/UI/RewardItem";
import Puzzle from "../components/svg/Puzzle";
//import axios from 'axios';
const { width } = Dimensions.get('window');
const containerWidth = width - 32;

function PublicProfileScreen(){
    const [userData, setUserData] = useState(null);

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
    
        return () => {
          setUserData(null);
        };
      }, []);

     
    return(
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
            {userData && (
                <>

                
                <View style={styles.profileInfo}>
                    <View style={styles.imageShadow}>
                        
                        <View style={styles.circleContainer}>
                            <Image
                            source={require('../assets/img/face.png')} //userData.photoPath
                            style={styles.imageStyle} 
                            />
                        </View>

                    </View>
                    <Text style={styles.personName}>
                        @{userData.nickname}
                    </Text>
                </View>
        
    
            <View style={styles.personalAchievements}>
                <View style={{}}>
                    <AchievementField сomponentTitle='Global Rank' backgroundColor='#31AAFF' value={userData.globalRank}/>
                </View>
                

                <AchievementField сomponentTitle='Continent Rank' backgroundColor='#71C47A' value={userData.continentRank}/>
                <AchievementField сomponentTitle='Points' backgroundColor='#FF5A5F' value={userData.points}/>
            </View>

            <View style={styles.solvedRiddlesContainer}>
                
                    <Image
                        source={require('../assets/img/pop.png')} // Замените путь на путь к вашему изображению
                        style={styles.imageStyle2} // Примените стили к изображению, если необходимо
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
                    
                        <Text>
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
            </>
        )}
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
        backgroundColor: '#6954d2', 
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16
    },
    circleContainer: {
        width: 84, 
        height: 84,
        borderRadius: 50, 
        backgroundColor: '#EAEDF4', 
        justifyContent: 'center', 
        alignItems: 'center', 
      },
    imageStyle: {
        width: 78, 
        height: 78,
        borderRadius: 40, 
      },

    imageStyle2: {
        width: 68, 
        height: 92, // изменти размер фото
      },
    solvedRiddlesText: {
        fontFamily: 'Nunito_700Bold',
        color: '#fff',
        marginBottom: 20
      },
    solvedRiddlesResult: {
        fontFamily: 'Nunito_700Bold',
        color: '#fff',
        paddingRight: 16
      },
    seeAllText: {
        fontFamily: 'Nunito_700Bold',
        color: '#7B62F4',
      },
    solvedRiddlesContainer: {
        marginTop: 12,
        height: 116,
        width: containerWidth,
        backgroundColor: '#7B62F4',
        borderWidth: 1,
        borderColor: '#7B62F4',
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
        shadowColor: '#DCDCDC',
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
