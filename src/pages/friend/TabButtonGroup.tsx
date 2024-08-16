import { cn } from '@/utils/cn';
import { ForwardedRef, forwardRef } from 'react';

export const TabButtonGroup = forwardRef(
  (
    {
      tabClick,
      tabList,
    }: { tabClick: (tabIndex: number) => void; tabList: string[] },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div role="tablist" className="tabs-boxed tabs " ref={ref}>
        {tabList.map((tabTitle, tabIndex) => (
          <div
            role="tab"
            className={cn('clickable tab', tabIndex === 0 && 'tab-active')}
            onClick={() => tabClick(tabIndex)}
          >
            {tabTitle}
          </div>
        ))}
      </div>
    );
  },
);
