import {
  useState,
  ReactElement,
  ReactNode,
  Children,
  isValidElement,
} from "react";

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: ReactNode;
  initialIndex?: number;
  className?: string;
}

function Tab({ children }: TabProps) {
  return <>{children}</>;
}

function Tabs({ children, initialIndex = 0, className = "" }: TabsProps) {
  const tabChildren = Children.toArray(children).filter(
    (child): child is ReactElement<TabProps> =>
      isValidElement(child) && child.type === Tab,
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  return (
    <div className={`c-tabs-container ${className}`}>
      <div className="c-tabs-list">
        {tabChildren.map((tab, idx) => (
          <button
            key={tab.props.label}
            className={`c-tab-btn${activeIndex === idx ? " c-tab-btn--active" : ""}`}
            onClick={() => setActiveIndex(idx)}
            type="button"
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="c-tab-panel">
        {tabChildren[activeIndex]?.props.children}
      </div>
    </div>
  );
}

Tab.displayName = "Tab";
Tabs.Tab = Tab;

export default Tabs;
