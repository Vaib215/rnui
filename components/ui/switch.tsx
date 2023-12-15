import { Pressable, View, Animated } from "react-native";
import { Text } from "../others/Themed";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@react-navigation/native";

interface SwitchProps {
  checked?: boolean;
  onCheckChange?: (checked: boolean) => void;
  label: string;
  disabled?: boolean;
  checkedLabel?: string;
  className?: string;
  textClassName?: string;
}

export default function Switch({
  checked: initialChecked = false,
  onCheckChange,
  label,
  disabled = false,
  checkedLabel,
  className,
  textClassName,
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
        className={`h-6 w-12 rounded-full relative
          ${
            checked
              ? isDark
                ? "bg-slate-200"
                : "bg-slate-800"
              : isDark
              ? "bg-slate-800"
              : "bg-slate-200"
          }      `}
      >
        <Animated.View
          style={{
            transform: [{ translateX }],
          }}
          className={`h-5 w-5 rounded-full bg-white absolute
        ${isDark ? "bg-black" : "bg-white"}
        top-0.5
        `}
        />
      </View>
      <Text className={textClassName}>{(checkedLabel && checked) ? checkedLabel : label}</Text>
    </Pressable>
  );
}
