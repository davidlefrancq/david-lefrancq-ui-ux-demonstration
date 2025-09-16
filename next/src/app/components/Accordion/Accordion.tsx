import React, { useState, ReactNode, Children, isValidElement } from "react";

interface AccordionProps {
  children: ReactNode;
  allowMultipleOpen?: boolean;
}

interface AccordionItemProps {
  title: ReactNode;
  children: ReactNode;
}

function AccordionItem(props: AccordionItemProps) {
  return <>{props.children}</>;
}

type AccordionComponent = ((props: AccordionProps) => React.ReactElement) & {
  Item: typeof AccordionItem;
};

const Accordion: AccordionComponent = ({
  children,
  allowMultipleOpen = false,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const items = Children.toArray(children).filter(isValidElement);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) => {
      const isOpen = prev.includes(index);

      if (allowMultipleOpen) {
        if (isOpen) {
          // Ferme l'item
          return prev.filter((i) => i !== index);
        } else {
          // Ouvre l'item en plus des autres
          return [...prev, index];
        }
      } else {
        // Mode exclusif : ouvre ou ferme l'item seul
        return isOpen ? [] : [index];
      }
    });
  };

  return (
    <div className="c-accordion">
      {items.map((child, idx) => {
        if (!isValidElement(child)) return null;
        const item = child as React.ReactElement<{
          title: ReactNode;
          children: ReactNode;
        }>;
        const { title, children: itemContent } = item.props;
        const isOpen = openIndexes.includes(idx);
        return (
          <div className="c-accordion__item" key={idx}>
            <button
              className={`c-accordion__title${isOpen ? " is-open" : ""}`}
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
              aria-controls={`c-accordion-content-${idx}`}
              id={`c-accordion-title-${idx}`}
            >
              {title}
            </button>
            <div
              className={`c-accordion__content${isOpen ? " is-open" : ""}`}
              id={`c-accordion-content-${idx}`}
              role="region"
              aria-labelledby={`c-accordion-title-${idx}`}
            >
              {isOpen && <div>{itemContent}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;
