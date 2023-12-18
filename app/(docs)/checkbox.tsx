import { View } from "react-native";
import ComponentShowcase from "../../components/layout";
import { Accordion, Checkbox, MonoText, Seperator } from "../../components/ui";
import { Text } from "../../components/others/Themed";

const data = [
  {
    title: "Usage",
    children:
      "Checkbox is a component that can be toggled on or off. It can be controlled or uncontrolled.",
  },
  {
    title: "Example",
    children: (
      <View className="flex-row w-screen">
        <View className="flex-1 space-y-4 my-2">
          <Text>{"<Checkbox label='Default' />"}</Text>
          <Text>{"<Checkbox checked ... />"}</Text>
          <Text>{"<Checkbox disabled={true} ... />"}</Text>
          <Text>{"<Checkbox color='red' ... />"}</Text>
        </View>
        <View className="flex-1 flex-col">
          <Checkbox label="Default" className="my-2" />
          <Checkbox label="Checked" checked={true} className="my-2"/>
          <Checkbox label="Disabled" disabled={true} className="my-2" />
          <Checkbox label="Red" color="red" />
        </View>
      </View>
    )
  },
  {
    title: "Props",
    children: (
      <View>
        <Text className="text-gray-300 w-[90vw]">
          <MonoText>
            {`
type CheckboxProps = {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onCheckChange?: (checked: boolean) => void;
  color?: string | null;
  className?: string;
  labelClassName?: string;
  size?: number;
};`}
          </MonoText>
        </Text>

        <Text className="w-[90vw]">
          'label' prop is the label of the checkbox.
        </Text>

        <Text className="w-[90vw]">
          'checked' prop is a boolean that indicates whether the checkbox is checked or not. It is false by default.
        </Text>

        <Text className="w-[90vw]">
          'disabled' prop is a boolean that indicates whether the checkbox is disabled or not. It is false by default.
        </Text>

        <Text className="w-[90vw]">
          'color' prop is the color of the checkbox. It is the theme color by default.
        </Text>

        <Text className="w-[90vw]">
          'size' prop is the size of the checkbox. It is 24 by default.
        </Text>
      </View>
    ),
  },
];

export default function CheckboxPage() {
  return (
    <ComponentShowcase
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
    >
      <Checkbox label="Accept terms and conditions" size={20} />
      <Seperator />

      <Accordion data={data} />
    </ComponentShowcase>
  );
}
