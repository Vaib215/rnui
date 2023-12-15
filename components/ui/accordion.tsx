import { MaterialIcons } from "@expo/vector-icons";
import React, { memo } from "react";
import { Animated, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { P } from "./Text";
import { Text, View, useThemeColor } from "../others/Themed";

const SingleAccordion = memo(
  ({
    title,
    children,
    open,
    setOpen,
    className,
    titleClassName = "text-lg",
    contentClassName,
    openIcon = "keyboard-arrow-down",
  }: {
    title: string;
    children: React.ReactNode;
    open?: boolean;
    setOpen: () => void;
    className?: string;
    titleClassName?: string;
    contentClassName?: string;
    openIcon?: any;
  }) => {
    const animation = React.useRef(new Animated.Value(0)).current;
    const themeColor = useThemeColor({}, "text");

    React.useEffect(() => {
      Animated.timing(animation, {
        toValue: open ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }, [open]);

    const animatedOpacity = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const animationRotation = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "180deg"],
    });

    return (
      <View className="p-2">
        <Pressable
          className={`flex-row py-2 justify-between items-center border-b-gray-700 border-b ${className}}`}
          onPress={setOpen}
          role="button"
          aria-expanded={open}
        >
          <Text className={titleClassName}>{title}</Text>
          <Animated.View style={{ transform: [{ rotate: animationRotation }] }}>
            <MaterialIcons name={openIcon} size={24} color={themeColor} />
          </Animated.View>
        </Pressable>
        <Animated.View style={{ opacity: animatedOpacity }}>
          <View>
            <P
              className={`${
                open ? "flex opacity-100 mt-2 text-sm font-light" : "hidden"
              } ${contentClassName}`}
            >
              {children}
            </P>
          </View>
        </Animated.View>
      </View>
    );
  }
);

interface AccordionProps {
  data: {
    title: string;
    children: React.ReactNode;
  }[];
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  openIcon?: any;
}

export default function Accordion({
  data,
  className,
  titleClassName,
  contentClassName,
  openIcon,
}: AccordionProps) {
  const [activeAccordionIndex, setActiveAccordionIndex] = React.useState(-1);

  const toggleAccordion = (index: number) => {
    setActiveAccordionIndex(index === activeAccordionIndex ? -1 : index);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => (
        <SingleAccordion
          title={item.title}
          children={item.children}
          open={activeAccordionIndex === index}
          setOpen={() => toggleAccordion(index)}
          className={className}
          titleClassName={titleClassName}
          contentClassName={contentClassName}
          openIcon={openIcon}
        />
      )}
    />
  );
}
