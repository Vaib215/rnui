import { View } from "react-native";
import ComponentShowcase from "../../components/layout";
import { Accordion, H2, MonoText, Progress, Seperator } from "../../components/ui";
import { Text } from "../../components/others/Themed";

const data = [
  {
    title: "Usage",
    children: "Progress component takes a progress prop which is a string representing the percentage of progress. It can be used to show the progress of a task.",
  },
  {
    title: "Example",
    children: (
      <View className="flex-row w-screen">
        <View className="flex-1 space-y-4 my-2">
          <Text>Default</Text>
          <Text>Secondary</Text>
          <Text>Outline</Text>
          <Text>Destructive</Text>
        </View>
        <View className="flex-1 flex-col">
          <Progress progress="50%" className="my-4 w-36" />
          <Progress progress="50%" className="my-3 w-36" variant="secondary" />
          <Progress progress="50%" className="my-4 w-36" variant="outline" />
          <Progress progress="50%" className="my-3 w-36" variant="destructive" />
        </View>
      </View>
    ),
  },
  {
    title: "Props",
    children: (
      <View>
        <Text className="text-gray-300 w-[90vw]">
          <MonoText>
            {`
type ProgressProps = {
  progress: string;
  duration?: number;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "destructive";
  animate?: boolean;
};`}
          </MonoText>
        </Text>

        <Text className="w-[90vw]">
          'duration' prop is the duration of the animation in milliseconds. It is 3000 by default.
        </Text>

        <Text className="w-[90vw]">
          'animate' prop is a boolean that indicates whether the progress bar should animate or not. It is true by default.
        </Text>
      </View>
    ),
  },
];

export default function ProgressPage() {
  return (
    <ComponentShowcase
      title="Progress"
      description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
    >
      <Progress progress="50%" className="mx-2"/>
      <Seperator />

      <H2>Docs</H2>
      <Accordion data={data} />
    </ComponentShowcase>
  );
}
