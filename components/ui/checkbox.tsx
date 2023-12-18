import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useThemeColor } from "../others/Themed";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onCheckChange?: (checked: boolean) => void;
  color?: string | null;
  className?: string;
  labelClassName?: string;
  size?: number;
}

export default function Checkbox({
  label,
  checked: initialChecked = false,
  disabled = false,
  onCheckChange,
  color = null,
  className = "",
  labelClassName = "",
  size = 24,
}: CheckboxProps) {
  const [checked, setChecked] = useState(initialChecked);
  const fadeAnim = useState(new Animated.Value(0))[0];
  const bounceValue = useState(new Animated.Value(1))[0];

  if (!color) {
    color = useThemeColor({}, "text");
  }

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(bounceValue, {
        toValue: 1.25,
        friction: 1,
        tension: 50,
        useNativeDriver: true,
      }),
    ]).start();
    Animated.timing(bounceValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [checked]);

  const handlePress = () => {
    if (disabled) {
      return;
    }
    setChecked(!checked);
    onCheckChange && onCheckChange(!checked);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ flexDirection: "row", alignItems: "center" }}
      className={className}
      accessible={true}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      accessibilityLabel={label}
    >
      <Animated.View
        style={{ opacity: fadeAnim, transform: [{ scale: bounceValue }] }}
      >
        <MaterialCommunityIcons
          name={checked ? "checkbox-marked" : "checkbox-blank-outline"}
          size={size}
          color={disabled ? color + "50" : color}
        />
      </Animated.View>
      {label && (
        <Text
          style={{
            marginLeft: 8,
            color,
          }}
          className={labelClassName}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}
