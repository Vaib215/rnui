import { useThemeColor } from "../components/others/Themed";

export type Variant = "primary" | "secondary" | "outline" | "destructive";

interface Styles {
  backgroundColor: string;
  borderColor: string;
  color: string;
  borderWidth?: number;
}

type VariantStyles = {
  [K in Variant]: Styles;
};

export const variantStyles = (checked: boolean = true): VariantStyles => ({
  primary: {
    backgroundColor: checked
      ? useThemeColor({}, "text")
      : useThemeColor({}, "text") + "50",
    borderColor: useThemeColor({}, "text"),
    color: useThemeColor({}, "background"),
  },
  secondary: {
    backgroundColor: checked
      ? useThemeColor({}, "tabIconDefault") + "75"
      : useThemeColor({}, "tabIconDefault") + "50",
    borderColor: useThemeColor({}, "tabIconDefault"),
    color: useThemeColor({}, "tint"),
  },
  outline: {
    backgroundColor: useThemeColor({}, "text") + "20",
    borderWidth: 2,
    borderColor: checked
      ? useThemeColor({}, "tabIconDefault")
      : useThemeColor({}, "tabIconDefault") + "25",
    color: useThemeColor({}, "text"),
  },
  destructive: {
    backgroundColor: checked
      ? useThemeColor({}, "destructive")
      : useThemeColor({}, "destructive") + "75",
    borderColor: useThemeColor({}, "destructive"),
    color: useThemeColor({}, "text"),
  },
});