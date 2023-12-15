import { StyleSheet } from "react-native";

import { Text, View, useThemeColor } from "../components/others/Themed";
import { MonoText } from "../components/ui/StyledText";
import { Link, LinkProps } from "expo-router";
import { SeperatorWithText } from "../components/ui/seperator";
import { FlatList } from "react-native-gesture-handler";
import { Badge } from "../components/ui";

const components: {
  name: string;
  href: LinkProps<string>["href"];
}[] = [
  {
    name: "Accordion",
    href: "/accordion",
  },
  {
    name: "Badge",
    href: "/badge",
  },
  {
    name: "Switch",
    href: "/switch",
  }
];

export default function HomeScreen() {
  const text = useThemeColor({}, "text");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to <MonoText>vaib/rnui</MonoText>{" "}
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        This is a UI library to make it easier to build React Native apps.
        Inspired from shadcn/ui
      </Text>

      <SeperatorWithText>
        <Badge animate>Components</Badge>
      </SeperatorWithText>

      <FlatList
        className="w-full"
        data={components}
        numColumns={2}
        renderItem={({ item }) => (
          <View className="flex-1 bg-[#cccccc50] items-center justify-center rounded-xl m-2">
            <Link
              href={item.href}
              className="text-xl w-full p-2 text-center"
              style={{ color: text }}
            >
              {item.name}
            </Link>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: "80%",
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
  },
});
