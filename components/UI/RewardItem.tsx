import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Nike from "../../assets/svg/Nike";
import Airbnb from "../../assets/svg/Airbnb";
import Netflix from "../../assets/svg/Netflix";
import { COLORS } from "../../constants/Colors";

interface RewardItemProps {
  text: string;
  logo: string;
  backgroundColor: string;
}

const RewardItem = ({text,logo,backgroundColor,} : RewardItemProps) => {
  let logoComponent;
  switch (logo) {
    case "Nike":
      logoComponent = <Nike />;
      break;
    case "AirBnB":
      logoComponent = <Airbnb />;
      break;
    case "Netflix":
      logoComponent = <Netflix />;
      break;
    default:
      logoComponent = null;
      break;
  }

  return (
    <View style={[styles.container, { backgroundColor, borderColor: backgroundColor, }]}>
      <View style={styles.logoContainer}>
        {logoComponent}
      </View>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 150,
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    flexDirection: "column",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 11,
    marginTop: 16,
    color: COLORS.white,
    fontFamily: 'Nunito_700Bold',
    textShadowOffset: { width: 0, height: 1.5 },
    textShadowRadius: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  logoContainer: {
    borderRadius: 16,
    width: 64,
    height: 64,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RewardItem;
