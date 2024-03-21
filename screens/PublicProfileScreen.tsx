import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import AchievementField from "../components/UI/AchievementField";
import RewardItem from "../components/UI/RewardItem";
import Puzzle from "../assets/svg/uiIcons/Puzzle";
import VioletStar from "../assets/svg/uiIcons/VioletStar";
import BlueStar from "../assets/svg/uiIcons/BlueStar";
import Coin from "../assets/svg/uiIcons/Coin";
import { COLORS } from "../constants/Colors";
import EmptyRewardItem from "../components/UI/EmptyRewardItem";
import { UserData } from "../constants/type";

function PublicProfileScreen() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const isAvailable = userData && userData.rewards && Object.keys(userData.rewards).length > 0;

  const fetchData = async () => {
    try {
      const response = require("../data/dummyData.json");
      setUserData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();

    return () => setUserData(null);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
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
            <Text style={styles.personName}>@{userData.nickname}</Text>
          </View>
          <View style={styles.personalAchievements}>
            <AchievementField
              сomponentTitle="Global Rank"
              backgroundColor={COLORS.backgroundBlueColor}
              value={userData.globalRank}
              svgComponent={<BlueStar />}
            />
            <AchievementField
              сomponentTitle="Continent Rank"
              backgroundColor={COLORS.backgroundGreenColor}
              value={userData.continentRank}
              svgComponent={<VioletStar />}
            />
            <AchievementField
              сomponentTitle="Points"
              backgroundColor={COLORS.backgroundRedColor}
              value={userData.points}
              svgComponent={<Coin />}
            />
          </View>
          <View style={styles.solvedRiddlesContainer}>
            <Image
              source={require("../assets/img/pinkBall.png")}
              style={styles.pinkCircleStyle}
            />
            <View style={styles.solevedRiddlesStyleContainer}>
              <Text style={styles.solvedRiddlesText}>Solved Riddles</Text>
              <View style={styles.resultField}>
                <View style={styles.puzzleMargin}>
                  <Puzzle />
                </View>
                <Text style={styles.solvedRiddlesResult}>
                  {userData.solvedRiddles}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.allRewards}>
            <View style={styles.rewardsTopText}>
              <Text style={styles.rewardsText}>Rewards</Text>
              {isAvailable ? (
                <Pressable onPress={() => {}}>
                  <Text style={styles.seeAllText}>See all</Text>
                </Pressable>
              ) : (
                <></>
              )}
            </View>
            {isAvailable ? (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.rewardCardsContainer}
              >
                {userData.rewards &&
                  Object.values(userData.rewards).map((reward, index) => (
                    <RewardItem
                      key={index}
                      text={reward.text}
                      logo={reward.logo}
                      backgroundColor={reward.backgroundColor}
                    />
                  ))}
              </ScrollView>
            ) : (
              <EmptyRewardItem />
            )}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
  },
  puzzleMargin: {
    marginLeft: 16,
    marginRight: 8,
  },
  profileInfo: {
    marginTop: 8,
    alignItems: "center",
  },
  rewardsText: {
    fontFamily: "Nunito_700Bold",
  },
  personName: {
    fontFamily: "Nunito_700Bold",
    marginTop: 12,
  },
  solevedRiddlesStyleContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  personalAchievements: {
    marginTop: 18,
  },
  resultField: {
    flex: 0.6,
    height: 40,
    borderRadius: 99,
    backgroundColor: COLORS.scorePurpuleContainer,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
  },
  circleContainer: {
    width: 84,
    height: 84,
    borderRadius: 50,
    backgroundColor: COLORS.circleImageBorder,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 78,
    height: 78,
    borderRadius: 40,
  },
  pinkCircleStyle: {
    width: 68.03,
    height: "100%",
  },
  solvedRiddlesText: {
    fontFamily: "Nunito_700Bold",
    color: COLORS.white,
    marginBottom: 20,
    fontSize: 15,
  },
  solvedRiddlesResult: {
    fontFamily: "Nunito_700Bold",
    color: COLORS.white,
    paddingRight: 16,
  },
  seeAllText: {
    fontFamily: "Nunito_700Bold",
    color: COLORS.purple,
  },
  solvedRiddlesContainer: {
    marginTop: 6,
    height: 116,
    width: "100%",
    backgroundColor: COLORS.purple,
    borderWidth: 1,
    borderColor: COLORS.purple,
    borderRadius: 16,
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  allRewards: {
    marginTop: 24,
    width: "100%",
  },
  rewardsTopText: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
  },
  rewardCardsContainer: {
    marginBottom: 24,
  },
  imageShadow: {
    shadowColor: COLORS.circleImageShadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0.1,
    elevation: 8,
  },
});

export default PublicProfileScreen;
