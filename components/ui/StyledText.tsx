import { Text, TextProps } from '../others/Themed';

export function MonoText(props: TextProps) {
  return <Text style={[props.style, { fontFamily: 'SpaceMono' }]} {...props} />;
}
