import { Text, Animated } from "react-native";
import { TextProps, View, useThemeColor } from "../others/Themed";
import React, { useEffect, useRef } from "react";

export default function Badge({
  variant = "primary",
  size = "md",
  className,
  animate = false,
  ...props
}: {
  variant?: "primary" | "secondary" | "outline" | "destructive";
  size?: "sm" | "md" | "lg";
  className?: string;
  animate?: boolean;
} & TextProps &
  React.ComponentProps<typeof View> &
  React.ComponentProps<typeof Text>) {
  const variantStyles = {
    primary: {
      color: useThemeColor({}, "background"),
      backgroundColor: useThemeColor({}, "text"),
    },
    secondary: {
      color: useThemeColor({}, "tint"),
      backgroundColor: useThemeColor({}, "tabIconDefault") + "25",
    },
    outline: {
      color: useThemeColor({}, "text"),
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: useThemeColor({}, "tabIconDefault") + "50",
    },
    destructive: {
      color: useThemeColor({}, "text"),
      backgroundColor: useThemeColor({}, "destructive") + "75",
    },
  };

  const sizeStyles = {
    sm: {
      fontSize: 12,
      lineHeight: 16,
      paddingVertical: 2,
      paddingHorizontal: 8,
    },
    md: {
      fontSize: 14,
      lineHeight: 20,
      paddingVertical: 4,
      paddingHorizontal: 12,
    },
    lg: {
      fontSize: 16,
      lineHeight: 24,
      paddingVertical: 6,
      paddingHorizontal: 16,
    },
  };

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (animate) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [animate]);

  const animatedStyle = animate
    ? {
        opacity: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.5],
        }),
      }
    : {};

  return (
    <View className={`flex-row ${className}`}>
      <Animated.Text
        className={`font-medium rounded-full`}
        style={{
          ...variantStyles[variant as keyof typeof variantStyles],
          ...sizeStyles[size as keyof typeof sizeStyles],
          ...animatedStyle,
        }}
        {...props}
      >
        <Text>{props.children}</Text>
      </Animated.Text>
    </View>
  );
}
