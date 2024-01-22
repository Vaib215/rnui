import { ToastAndroid } from "react-native";
import ComponentShowcase from "../../components/layout";
import { Text, View } from "../../components/others/Themed";
import { Accordion, Button, H2, MonoText, Seperator } from "../../components/ui";

const data = [
  {
    title: "Usage",
    children: (<View>
      <MonoText>{`import {Button} from "@/components/ui"`}</MonoText>
      <MonoText>{`<Button onPress={() => 
  ToastAndroid.show(
    "Hello from RNUI", 1000
  )}>
  Click Me
< /Button>`}</MonoText>
    </View>)
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


export default function ButtonPage() {
  return (
    <ComponentShowcase title="Button" description="Displays a button or a component that looks like a button.">
      <Button onPress={() => { ToastAndroid.show("Hello from RNUI", 1000) }}>Button</Button>
      <Seperator />

      <H2>Docs</H2>
      <Accordion data={data} />

    </ComponentShowcase>
  )
}
