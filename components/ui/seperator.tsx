import { useTheme } from "@react-navigation/native";
import { Text, View } from "../others/Themed";

export default function Seperator() {
  return <View className="border-t border-gray-700 my-4" />;
}

export const SeperatorWithText = ({
  children,
}: {
  children: any;
}) => {
  const theme = useTheme();
  return (
    <View className={`w-full flex-row items-center gap-x-4 justify-center my-2`}>
      <View
        className={`flex-1 h-0.5 ${theme.dark ? "bg-white" : "bg-black"}`}
      ></View>
      <Text className="text-lg text-center font-semibold">{children}</Text>
      <View
        className={`flex-1 h-0.5 ${theme.dark ? "bg-white" : "bg-black"}`}
      ></View>
    </View>
  );
};
