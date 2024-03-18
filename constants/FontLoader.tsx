import React, { ReactNode } from "react";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

interface FontLoaderProps {
  children: ReactNode;
}

const FontLoader: React.FC<FontLoaderProps> = ({ children }) => {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <>{children}</>;
};

export default FontLoader;
