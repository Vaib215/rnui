import { Pressable, View, Animated } from "react-native";
import { Text, useThemeColor } from "../others/Themed";
import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "@react-navigation/native";

interface SwitchProps {
  checked?: boolean;
  onCheckChange?: (checked: boolean) => void;
  label: string;
  disabled?: boolean;
  checkedLabel?: string;
  className?: string;
  textClassName?: string;
  variant?: "primary" | "secondary" | "outline" | "destructive";
}

export default function Switch({
  checked: initialChecked = false,
  onCheckChange,
  label,
  disabled = false,
  checkedLabel,
  className,
  textClassName,
  variant = "primary",
}: SwitchProps) {
  const [checked, setChecked] = useState(initialChecked);
  const theme = useTheme();
  const isDark = theme.dark;

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: checked ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [checked]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 26],
  });

  const handlePress = () => {
    if (!disabled) {
      setChecked(!checked);
      onCheckChange && onCheckChange(!checked);
    }
  };

  const variantStyles = {
    primary: {
      backgroundColor: checked
        ? useThemeColor({}, "text")
        : useThemeColor({}, "text") + "50",
    },
    secondary: {
      backgroundColor: checked
        ? useThemeColor({}, "tabIconDefault") + "75"
        : useThemeColor({}, "tabIconDefault") + "50",
    },
    outline: {
      backgroundColor: useThemeColor({}, "text") + "20",
      borderWidth: 2,
      borderColor: checked
        ? useThemeColor({}, "tabIconDefault")
        : useThemeColor({}, "tabIconDefault") + "25",
    },
    destructive: {
      backgroundColor: checked
        ? useThemeColor({}, "destructive")
        : useThemeColor({}, "destructive") + "75",
    },
  };

  return (
    <Pressable
      onPress={handlePress}
      className={`flex-row items-center space-x-2 self-start ${className}`}
      accessible={true}
      accessibilityRole="switch"
      accessibilityState={{ disabled, checked }}
      accessibilityLabel={checked ? checkedLabel : label}
    >
      <View
        className={`h-6 w-12 rounded-full relative`}
        style={variantStyles[variant]}
      >
        <Animated.View
          style={{
            transform: [{ translateX }],
            borderColor:
              variant === "outline"
                ? variantStyles[variant].borderColor
                : "transparent",
          }}
          className={`h-5 w-5 rounded-full bg-white absolute
        ${isDark ? "bg-black" : "bg-white"}
        ${variant === "outline" && checked ? "border-2" : ""}
        ${variant === "outline" ? "top-0" : "top-0.5"}
        `}
        />
      </View>
      <Text className={textClassName}>
        {checkedLabel && checked ? checkedLabel : label}
      </Text>
    </Pressable>
  );
}
