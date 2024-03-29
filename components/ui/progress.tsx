import { useRef } from "react";
import { View, useThemeColor } from "../others/Themed";
import { Animated } from "react-native";
import { variantStyles } from "../../utils/styles";

interface ProgressProps {
  progress: string;
  duration?: number;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "destructive";
  animate?: boolean;
}

export default function Progress({
  progress,
  duration = 3000,
  className,
  variant = "primary",
  animate = true,
}: ProgressProps) {
  const animated = useRef(new Animated.Value(0)).current;

  if (animate) {
    Animated.timing(animated, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }

  const animatedProgress = animated.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", progress],
  });

  return (
    <View
      className={`h-2 rounded border ${className}`}
      style={{ borderColor: variantStyles({checked: true})[variant].borderColor,
        backgroundColor: variantStyles({checked: true})[variant].backgroundColor.slice(7) + "30"
      }}
      accessible={true}
      accessibilityRole="progressbar"
      accessibilityValue={{ now: +progress.split("%")[0], min: 0, max: 100 }}
    >
      <Animated.View
        className={`h-full rounded`}
        style={{
          width: animatedProgress,
          backgroundColor: variantStyles({checked: true})[variant].backgroundColor,
        }}
      />
    </View>
  );
}
