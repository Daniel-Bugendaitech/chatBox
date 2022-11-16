import React, { useState } from 'react';
import { accordion } from '../constants';

const Accordion = () => {
  const [data, setData] = useState(accordion);
  return (
    <div className="w-full">
      {data.map((item) => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  );
};

const AccordionItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        className="flex bg-[#e2d4a5] mb-2 px-4 py-3 text-secondary"
        onClick={() => setShow(!show)}
      >
        <p>{show ? '–' : '+'} </p>
        <h3 className="ml-4">{question}</h3>
      </div>
      {show && <p className="bg-[#d9cfe7] mb-2 px-4 py-4">{answer}</p>}
    </div>
  );
};

export default Accordion;
