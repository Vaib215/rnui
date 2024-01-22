import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Variant, variantStyles } from "../../utils/styles";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onPress?: () => void;
  disabled?: boolean;
  variant?: Variant;
  animate?: boolean;
}
export default function Button({
  children,
  className,
  onPress,
  disabled,
  variant = "primary",
}: ButtonProps) {
  const style = variantStyles()[variant];

  return (
    <TouchableOpacity
      style={{
        borderColor: style.borderColor,
        backgroundColor: style.backgroundColor,
      }}
      className={`rounded border ${className}`}
      onPress={onPress}
      disabled={disabled}
    >
      <Text className={`text-center p-2`} style={{ color: style.color }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
