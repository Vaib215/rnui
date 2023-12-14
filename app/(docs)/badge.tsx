import ComponentShowcase from "../../components/layout";
import { Text, View } from "../../components/others/Themed";
import { Accordion, Badge, H2, MonoText, Seperator } from "../../components/ui";

const data = [
  {
    title: "Usage",
    children:
      "Badge takes a string (or any other component) as a child and displays it as a badge.",
  },
  {
    title: "Example",
    children: (
      <View className="flex-row w-screen">
        <View className="flex-1 space-y-4 my-2">
          <Text>Default (Primary & Medium)</Text>
          <Text>Secondary</Text>
          <Text>Outline</Text>
          <Text>Destructive</Text>
          <Text>Small</Text>
          <Text>Large</Text>
          <Text>Animate</Text>
        </View>
        <View className="flex-1 flex-col">
          <Badge className="my-1">{"<Badge />"}</Badge>
          <Badge variant="secondary" className="my-1">
            {"variant='secondary'"}
          </Badge>
          <Badge variant="outline" className="my-1">
            {"variant='outline'"}
          </Badge>
          <Badge variant="destructive" className="my-1">
            {"variant='destructive'"}
          </Badge>
          <Badge size="sm" className="my-1">
            {"size='sm'"}
          </Badge>
          <Badge size="lg" className="my-1">
            {"size='lg'"}
          </Badge>
          <Badge animate className="my-1">
            {"animate"}
          </Badge>
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
type BadgeProps = {
  variant?: "primary" | "secondary" | "outline" | "destructive";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
};`}
          </MonoText>
        </Text>

        <Text className="text-gray-300 my-2">
          The component takes the following props:
        </Text>
        <View className="flex-col">
          <Text className="text-gray-300 my-2">variant</Text>
          <Text className="text-gray-300 my-2">size</Text>
          <Text className="text-gray-300 my-2">className</Text>
          <Text className="text-gray-300 my-2">children</Text>
        </View>

        <Text className="text-gray-300 my-2">
          The 'variant' prop takes one of the following values:
        </Text>
        <View className="flex-row space-x-4">
          <Text className="text-gray-300 my-2">primary</Text>
          <Text className="text-gray-300 my-2">secondary</Text>
          <Text className="text-gray-300 my-2">outline</Text>
          <Text className="text-gray-300 my-2">destructive</Text>
        </View>

        <Text className="text-gray-300 my-2">
          The 'size' prop takes one of the following values:
        </Text>
        <View className="flex-row space-x-4">
          <Text className="text-gray-300 my-2">sm</Text>
          <Text className="text-gray-300 my-2">md</Text>
          <Text className="text-gray-300 my-2">lg</Text>
        </View>

        <Text className="text-gray-300 my-2">
          The 'animate' prop takes a boolean value. Defaults to false.
        </Text>
      </View>
    ),
  },
];

export default function BadgePage() {
  return (
    <ComponentShowcase
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
    >
      <Badge>Badge</Badge>
      <Seperator />

      <H2>Docs</H2>
      <Accordion data={data} />
    </ComponentShowcase>
  );
}
