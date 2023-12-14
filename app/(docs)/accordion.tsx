import { ScrollView } from "react-native-gesture-handler";
import Accordion from "../../components/ui/accordion";
import Seperator from "../../components/ui/seperator";
import { MonoText } from "../../components/ui/StyledText";
import { H2, P } from "../../components/ui";
import ComponentShowcase from "../../components/layout";

const data = [
  {
    title: "Accordion 1",
    children: "This is the content of accordion 1",
  },
  {
    title: "Accordion 2",
    children: "This is the content of accordion 2",
  },
  {
    title: "Accordion 3",
    children: "This is the content of accordion 3",
  },
];

function AccordionExampleDocs() {
  return (
    <>
      <P className="text-gray-300 my-2">
        The following code is used to generate the accordion above:
        <MonoText className="text-gray-300">
          {`
const data = [
  {
    title: "Accordion 1",
    children: "This is the content of accordion 1",
  },
  {
    title: "Accordion 2",
    children: "This is the content of accordion 2",
  },
  {
    title: "Accordion 3",
    children: "This is the content of accordion 3",
  },
];

export default function AccordionPage() {
  return (
    <Accordion data={data} / >
  );
}`}
        </MonoText>
      </P>
    </>
  );
}

const accordionDocsData = [
  {
    title: "Usage",
    children:
      "The component takes an array of objects as a prop. Each object represents an accordion item and should have a 'title' and 'children' property. The 'title' is the heading of the accordion item and 'children' is the content that is revealed when the heading is clicked.",
  },
  {
    title: "Example",
    children: <AccordionExampleDocs />,
  },
  {
    title: "Props",
    children: (
      <ScrollView>
        <MonoText className="text-gray-300">
          {`
interface AccordionProps {
  data: {
    title: string;
    children: React.ReactNode;
  }[];
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  openIcon?: any;
}`}
        </MonoText>
        <MonoText className="text-gray-300">
          {`
data: {
  title: string;
  children: React.ReactNode;
}[]`}
        </MonoText>

        <MonoText className="text-gray-300">
          {`
className?: string`}
        </MonoText>
        <P className="text-gray-300 w-[90vw] my-2">
          Optional className prop for the accordion container.
        </P>
        <MonoText className="text-gray-300">
          {`
titleClassName?: string`}
        </MonoText>
        <P className="text-gray-300 w-[90vw] my-2">
          Optional className prop for the accordion heading.
        </P>
        <MonoText className="text-gray-300">
          {`
contentClassName?: string`}
        </MonoText>
        <P className="text-gray-300 w-[90vw] my-2">
          Optional className prop for the accordion content.
        </P>
        <MonoText className="text-gray-300">
          {`
openIcon?: any`}
        </MonoText>
        <P className="text-gray-300 w-[90vw] my-2">
          Optional icon prop for the accordion heading when the accordion is
          open.
        </P>
      </ScrollView>
    ),
  },
];

export default function AccordionPage() {
  return (
    <ComponentShowcase title="Accordion Component" description="A vertically stacked set of interactive headings that each reveal a section of content.">
      <Accordion data={data} />

      <Seperator />

      <H2>Docs</H2>
      <Accordion data={accordionDocsData} />
    </ComponentShowcase>
  );
}
