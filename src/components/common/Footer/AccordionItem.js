import { useState } from "react";
export function AccordionItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
        {props.title}
        <i class="fa-solid fa-chevron-down"></i>
        {/* <i class="fa-solid fa-house"></i>{" "} */}
      </div>
      {isOpen && <div className="accordion-content">{props.content}</div>}
    </div>
  );
}
