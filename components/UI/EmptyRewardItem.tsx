import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS } from "../../constants/Colors";

const EmptyRewardItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Image
          source={require("../../assets/img/pinkEmptyImg.png")}
          style={styles.imageStyle}
        />
        <Text style={styles.titleStyle}>No Rewards... Yet!</Text>
        <Text style={styles.textStyle}>
          <Text style={styles.username}>@gretch_tis</Text> hasn't earned any
          rewards... yet. Stay tuned for more achievements!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  mainContainer: {
    borderRadius: 16,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.noRewardsBorderColor,
    padding: 32,
    width: 343,
    height: 284,
    shadowColor: COLORS.noRewardsBorderColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0.1,
    elevation: 8,
    marginBottom: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 172.08,
    height: 120,
    marginTop: 32,
  },
  titleStyle: {
    fontFamily: "Nunito_700Bold",
    marginVertical: 18,
    textAlign: "center",
    fontSize: 18,
  },
  textStyle: {
    fontFamily: "Nunito_400Regular",
    textAlign: "center",
    width: 312,
    marginBottom: 32,
  },
  username: {
    color: COLORS.purple,
    fontFamily: "Nunito_700Bold",
  },
});

export default EmptyRewardItem;
