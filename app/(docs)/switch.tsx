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
          <Text>{"<Switch label='Default' />"}</Text>
          <Text>{"<Switch checked ... />"}</Text>
          <Text>{"<Switch disabled={true} ... />"}</Text>
          <Text>{"<Switch variant='secondary' ... />"}</Text>
          <Text>{"<Switch variant='outline' ... />"}</Text>
          <Text>{"<Switch variant='destructive' .../>"}</Text>
        </View>
        <View className="flex-1 flex-col">
          <Switch label="Default" className="my-2" />
          <Switch label="Checked" checked={true} className="mb-2"/>
          <Switch label="Disabled" disabled={true} className="mb-2" />
          <Switch label="Secondary" variant="secondary" className="my-2"/>
          <Switch label="Outline" variant="outline" className="my-2" />
          <Switch label="Destructive" variant="destructive" />
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
  variant?: "primary" | "secondary" | "outline" | "destructive";
};`}
          </MonoText>
        </Text>

        <Text className="text-gray-300 my-2">
          The 'checked' prop takes a boolean value. Defaults to false.
        </Text>

        <Text className="text-gray-300 my-2">
          The 'disabled' prop takes a boolean value. Defaults to false.
        </Text>

        <Text className="text-gray-300 my-2">
          The 'variant' prop takes a string value. Defaults to 'primary'.
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
