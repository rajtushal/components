import React, { useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretDownFill } from "react-icons/bs";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const rederList = items.map((item, i) => {
    const isExpanded = i == expandedIndex;
    const icons = (
      <span className="text-2xl">
        {isExpanded ? <BsFillCaretDownFill /> : <BsFillCaretLeftFill />}
      </span>
    );
    return (
      <div key={i}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b item-center cursor-pointer"
          onClick={() => setExpandedIndex(i)}
        >
          {item.label} {icons}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{rederList}</div>;
}

export default Accordion;
