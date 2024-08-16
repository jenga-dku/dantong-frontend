import { ReactNode, useEffect, useRef, useState } from 'react';
import { TabButtonGroup } from './TabButtonGroup';
import { Box } from '@/components/ui/Box';

export const TabPageLayout = ({
  children,
  tabList,
}: {
  children: ReactNode[];
  tabList: string[];
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);
  let startPosition = 0;

  function touchStart(event: React.TouchEvent<HTMLDivElement>) {
    startPosition = event.touches![0].clientX;
  }

  function touchEnd(event: React.TouchEvent<HTMLDivElement>) {
    const endPosition = event.changedTouches[0].clientX;
    const movement = startPosition - endPosition;
    const tabMaxLength = tabListRef.current!.childNodes.length!;

    if (movement < -20 && activeTabIndex > 0) {
      setActiveTabIndex((prev) => prev - 1);
    }
    if (movement > 20 && activeTabIndex < tabMaxLength - 1) {
      setActiveTabIndex((prev) => prev + 1);
    }
  }

  const tabClick = (tabIndex: number) => {
    setActiveTabIndex(tabIndex);
  };

  useEffect(() => {
    let activeTab = tabListRef.current!.childNodes[
      activeTabIndex
    ]! as HTMLDivElement;
    if (activeTab?.nodeType === 1) {
      document.querySelector('.tab-active')?.classList.remove('tab-active');
      activeTab.classList.add('tab-active');
    }
  }, [activeTabIndex]);

  return (
    <div
      className="flex h-[100dvh] w-full flex-col gap-2"
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
    >
      <Box className="h-[calc(100dvh-160px)] flex-col gap-5 ">
        <TabButtonGroup
          ref={tabListRef}
          tabList={tabList}
          tabClick={tabClick}
        />
        <div className="flex h-full w-[calc(100%+10px)] flex-col gap-5 overflow-auto pr-3">
          {children[activeTabIndex]}
        </div>
      </Box>
    </div>
  );
};
