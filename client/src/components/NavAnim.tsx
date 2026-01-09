import React, { useState, useEffect, useRef } from "react";
import "../styles/GooeyNav.css";

interface NavItem {
  label: string;
  href: string;
}

export interface NavAnimProps {
  items: NavItem[];
  onItemClick?: (item: NavItem, index: number) => void;
  initialActiveIndex?: number;
}

const NavAnim: React.FC<NavAnimProps> = ({
  items,
  onItemClick,
  initialActiveIndex = 0,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [coords, setCoords] = useState({ x: 0, width: 0 });
  const listRef = useRef<HTMLUListElement>(null);

  const update = (index: number) => {
    if (listRef.current) {
      const activeItem = listRef.current.children[index + 1] as HTMLElement; 
      if (activeItem) {
        setCoords({
          x: activeItem.offsetLeft,
          width: activeItem.offsetWidth,
        });
      }
    }
  };

  useEffect(() => {
    update(activeIndex);
    window.addEventListener("resize", () => update(activeIndex));
    return () => window.removeEventListener("resize", () => update(activeIndex));
  }, [activeIndex]);

  return (
    <div className="saas-nav-container">
      <ul className="saas-nav-list" ref={listRef}>
        {/* THE PRISM SCANNER */}
        <div 
          className="saas-indicator" 
          style={{ 
            transform: `translateX(${coords.x}px)`, 
            width: `${coords.width}px` 
          }}
        >
          <div className="prism-layer layer-1" />
          <div className="prism-layer layer-2" />
          <div className="prism-cursor" />
        </div>

        {items.map((item, index) => (
          <li
            key={item.label}
            className={`saas-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => {
              setActiveIndex(index);
              onItemClick?.(item, index);
            }}
          >
            <span className="saas-text">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavAnim;