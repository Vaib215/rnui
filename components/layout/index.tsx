import { FlatList } from "react-native-gesture-handler";
import { H1, P, Seperator } from "../ui"

export default function ComponentShowcase({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <FlatList
      className="flex-1 p-4"
      data={[{ key: title }]}
      renderItem={() => (
        <>
          <H1>{title}</H1>
          <P className="text-gray-500">{description}</P>
          <Seperator /> 
          {children}
        </>
      )}
    />
  );
}
