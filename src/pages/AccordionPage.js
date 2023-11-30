import React from "react";
import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      label: "title number one",
      content: "content number one",
    },
    {
      label: "title number two",
      content: "content number two",
    },
    {
      label: "title number three",
      content: "content number three",
    },
    {
      label: "title number four",
      content: "contnet number four",
    },
  ];
  return (
    <>
      <Accordion items={items} />
    </>
  );
}

export default AccordionPage;
