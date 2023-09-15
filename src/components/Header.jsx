import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Animated,
  useWindowDimensions,
  StatusBar,
  Easing,
} from "react-native";
import { useTheme } from "react-native-paper";

const Offset = 210;

export default function Header({ color, children }) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const { width, height } = useWindowDimensions();
  const ballAnimation = useRef(new Animated.Value(0)).current;

  const theme = useTheme();

  const ballColor = "#fff5";

  const headerBg = {
    backgroundColor: animatedValue.interpolate({
      inputRange: [0, Offset],
      outputRange: ["transparent", theme.colors.surface],
      extrapolate: "clamp",
      useNativeDriver: true,
    }),
  };

  const animateBall = () => {
    Animated.sequence([
      Animated.timing(ballAnimation, {
        toValue: 30,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(ballAnimation, {
        toValue: 0,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => animateBall());
  };

  useEffect(() => {
    animateBall();
  }, []);

  return (
    <View style={{ ...styles.container }}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={"light-content"}
        animated
      />
      <Animated.View style={[headerBg, styles.header, { width }]} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={(e) => {
          const offsetY = e.nativeEvent.contentOffset.y;
          animatedValue.setValue(offsetY);
          if (offsetY > Offset / 2 && !theme.dark) {
            StatusBar.setBarStyle("dark-content");
          } else {
            StatusBar.setBarStyle("light-content");
          }
        }}
        scrollEventThrottle={16}
      >
        <View
          style={[
            styles.topConatiner,
            {
              backgroundColor: color,
              height: height / 3,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.ball,
              {
                backgroundColor: ballColor,
                transform: [{ translateY: ballAnimation }],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.ball,
              {
                right: 10,
                top: 40,
                backgroundColor: ballColor,
              },
              {
                transform: [{ translateY: ballAnimation }],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.ball,
              {
                left: "30%",
                top: "50%",
                backgroundColor: ballColor,
              },
              {
                transform: [
                  { translateX: ballAnimation },
                  { translateY: ballAnimation },
                ],
              },
            ]}
          />
        </View>
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    position: "absolute",
    zIndex: 10,
  },
  topConatiner: {
    // height: 150,
    position: "relative",
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  ball: {
    position: "absolute",
    height: 60,
    width: 60,
    borderRadius: 100,
  },
});
