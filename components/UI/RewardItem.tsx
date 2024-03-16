import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Nike from "../svg/Nike";
import Airbnb from "../svg/Airbnb";
import Netflix from "../svg/Netflix";

const lightenColor = (color, percent) => {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(1.50 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;

  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

const RewardItem = ({
  text,
  logo,
  backgroundColor,
}: {
  text: string;
  logo: string;
  backgroundColor: string;
}) => {
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

  const logoBackgroundColor = lightenColor(backgroundColor, 20);

  return (
    <View style={[styles.container, { backgroundColor, borderColor: backgroundColor, }]}>
      <View style={[styles.logoContainer, { backgroundColor: logoBackgroundColor }]}>
        {logoComponent}
      </View>

      <Text style={styles.text}>{text}</Text>
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
    // marginBottom: 8,
    textAlign: "center",
    fontSize: 11,
    marginTop: 16,
    color: "#fff",
    fontFamily: 'Nunito_700Bold',
    textShadowOffset: { width: 0, height: 1.5 }, // горизонтальное смещение 0, вертикальное смещение 2 (тень будет внизу)
    textShadowRadius: 1, // радиус тени
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // цвет тени
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
