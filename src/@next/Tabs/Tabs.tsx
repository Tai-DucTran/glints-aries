import nextId from 'react-id-generator';
import React, { useEffect, useRef, useState } from 'react';
import { Tab } from './Tab';
import {
  StyledLi,
  StyledTabHeaderContainer,
  StyledTabsContainer,
  StyledUl,
} from './TabStyle';

export type TabModel = {
  /** Id of the tab, a random id will nbe assigned if empty */
  id?: string;
  /** Content of the type header */
  content: React.ReactNode;
};

export type TabsProps = {
  /** TabModel has 2 properties
   *
   * `id?: string`, id for Tab and will be autogenerated if empty
   *
   * `content: React.ReactNode` component for Tab header
   * */
  tabs: TabModel[];
  selected?: number;
  children?: React.ReactNode;
  fitted?: boolean;
  onSelected?: (index: number) => void;
};

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  {
    tabs,
    selected: selectedIndex = 0,
    children,
    fitted,
    onSelected,
  }: TabsProps,
  ref
) {
  const tabsHeaderRef = useRef(null);
  const tabLength = tabs.length;

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const element = tabsHeaderRef.current;
    const isElOverFlowX = element?.scrollWidth > element?.clientWidth;
    setCanScrollRight(isElOverFlowX);
  }, []);

  useEffect(() => {
    if (selectedIndex < 0 || selectedIndex >= tabLength) {
      return;
    }

    setSelectedTabIndex(selectedIndex);
  }, [selectedIndex, tabLength]);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const startX = event.clientX - tabsHeaderRef.current.offsetLeft;
    setDragStartX(startX);
    setScrollLeft(tabsHeaderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    event.preventDefault();
    const x = event.clientX - tabsHeaderRef.current.offsetLeft;
    const scrollMultiplier = (x - dragStartX) * 3;
    tabsHeaderRef.current.scrollLeft = scrollLeft - scrollMultiplier;
  };

  const handleScroll = () => {
    const element = tabsHeaderRef.current;
    setCanScrollLeft(element?.scrollLeft > 0);
    setCanScrollRight(
      element.scrollLeft < element.scrollWidth - element.clientWidth
    );
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const element = tabsHeaderRef.current;
    element.scrollTo({
      left: element.scrollLeft + event.deltaY * 1,
      behavior: 'smooth',
    });
  };

  const handleSelectedIndexChanged = (index: number) => {
    setSelectedTabIndex(index);
    onSelected?.(index);
  };

  const renderTabs = tabs.map((tab: TabModel, index: number) => {
    const tabId = tab.id || nextId();
    return (
      <StyledLi key={`${tabId}-${index}`} className="tab-item">
        <Tab
          id={tabId}
          key={`tab-${tabId}-${index}`}
          content={tab.content}
          onSelect={() => handleSelectedIndexChanged(index)}
          selected={index === selectedTabIndex}
        ></Tab>
      </StyledLi>
    );
  });

  return (
    <StyledTabsContainer ref={ref} className="tabs-container">
      <StyledTabHeaderContainer
        className="tabs-header-container"
        ref={tabsHeaderRef}
        onScroll={handleScroll}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        data-scroll-left={canScrollLeft}
        data-scroll-right={canScrollRight}
        data-grabbing={isDragging}
      >
        <StyledUl data-fitted={fitted} className="tabs-list">
          {renderTabs}
        </StyledUl>
      </StyledTabHeaderContainer>
      <div className="tab-item-content">{children}</div>
    </StyledTabsContainer>
  );
});
