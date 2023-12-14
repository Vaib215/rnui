import { Text, TextProps } from "../others/Themed";

export const H1 = (props: TextProps) => {
  return <Text {...props} className="text-3xl font-bold" />;
};

export const H2 = (props: TextProps) => {
  return <Text {...props} className="text-2xl font-bold" />;
};

export const P = (props: TextProps) => {
  return <Text {...props} className={`text-base ${props.className}`} />;
}

export const Small = (props: TextProps) => {
  return <Text {...props} className={`text-sm ${props.className}`} />;
}