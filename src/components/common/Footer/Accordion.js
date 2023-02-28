import { AccordionItem } from "./AccordionItem";
export function Accordion() {
  const accordionData = [
    {
      title: "Accordion Item 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Accordion Item 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Accordion Item 3",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}
