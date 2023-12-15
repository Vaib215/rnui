import ComponentShowcase from "../../components/layout";
import { Text, View } from "../../components/others/Themed";
import {
  Accordion,
  H2,
  MonoText,
  Seperator,
  Switch,
} from "../../components/ui";

const data = [
  {
    title: "Usage",
    children:
      "Switch is a component that can be toggled on or off. It can be controlled or uncontrolled.",
  },
  {
    title: "Example",
    children: (
      <View className="flex-row w-screen">
        <View className="flex-1 space-y-4 my-2">
          <Text>Default</Text>
          <Text>Checked</Text>
          <Text>Disabled</Text>
        </View>
        <View className="flex-1 flex-col">
          <Switch label="Switch" className="my-1" />
          <Switch label="Checked Switch" checked={true} className="my-1" />
          <Switch label="Disabled Switch" disabled={true} className="my-1" />
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
type SwitchProps = {
  checked?: boolean;
  setChecked?: (checked: boolean) => void;
  onCheckChange?: (checked: boolean) => void;
  label: string;
  disabled?: boolean;
  checkedLabel?: string;
  className?: string;
  textClassName?: string;
};`}
          </MonoText>
        </Text>

        <Text className="text-gray-300 my-2">
          The component takes the following props:
        </Text>
        <View className="flex-col">
          <Text className="text-gray-300 my-2">checked</Text>
          <Text className="text-gray-300 my-2">setChecked</Text>
          <Text className="text-gray-300 my-2">onCheckChange</Text>
          <Text className="text-gray-300 my-2">label</Text>
          <Text className="text-gray-300 my-2">disabled</Text>
          <Text className="text-gray-300 my-2">checkedLabel</Text>
          <Text className="text-gray-300 my-2">className</Text>
          <Text className="text-gray-300 my-2">textClassName</Text>
        </View>

        <Text className="text-gray-300 my-2">
          The 'checked' prop takes a boolean value. Defaults to false.
        </Text>

        <Text className="text-gray-300 my-2">
          The 'disabled' prop takes a boolean value. Defaults to false.
        </Text>
      </View>
    ),
  },
];

export default function SwitchPage() {
  return (
    <ComponentShowcase
      title="Switch"
      description="A switch component that can be toggled on or off."
    >
      <Switch label="Switch" />
      <Seperator />

      <H2>Docs</H2>
      <Accordion data={data} />
    </ComponentShowcase>
  );
}
