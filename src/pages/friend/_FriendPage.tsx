import { Box } from '@/components/ui/Box';
import { Button } from '@/components/ui/Button';
import { useModal } from '@/hooks/modal/useModal';
// import { useGetInfiniteFriendList } from '@/query-hooks/friend';
import { useEffect, useRef, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

export const FriendPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);
  const { open } = useModal();
  // const { data: friends, isLoading } = useGetInfiniteFriendList({ size: 3 });

  let startPosition = 0;

  function touchStart(event: React.TouchEvent<HTMLDivElement>) {
    startPosition = event.touches![0].clientX;
  }

  function touchEnd(event: React.TouchEvent<HTMLDivElement>) {
    const endPosition = event.changedTouches[0].clientX;
    if (startPosition - endPosition < -100) {
      if (activeTabIndex > 0) {
        setActiveTabIndex((prev) => prev - 1);
      }
    }
    if (startPosition - endPosition > 100) {
      if (activeTabIndex < tabListRef.current!.childNodes.length! - 1) {
        setActiveTabIndex((prev) => prev + 1);
      }
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
      <div role="tablist" className="tabs-boxed tabs " ref={tabListRef}>
        <div
          role="tab"
          className="clickable tab tab-active"
          onClick={() => tabClick(0)}
        >
          친구
        </div>
        <div role="tab" className="clickable tab" onClick={() => tabClick(1)}>
          요청
        </div>
      </div>
      <div className="inline-flex w-full gap-4 overflow-hidden">
        <Box className="shrink-0 flex-col gap-5">
          {activeTabIndex === 0 ? (
            <>
              {Array.from({ length: 10 }).map(() => (
                <li className="flex w-full items-center justify-between gap-1">
                  <div>
                    <p className="text-xs text-primary ">소프트웨어학과</p>
                    <p>이름1</p>
                  </div>
                  <RxCross2
                    className="clickable"
                    onClick={() => {
                      open({
                        title: '친구 삭제',
                        desc: '친구 목록에서 삭제하시겠습니까?',
                        option: {
                          type: 'CONFIRM_CANCEL',
                        },
                      });
                    }}
                  />
                </li>
              ))}
            </>
          ) : (
            <>
              {Array.from({ length: 3 }).map(() => (
                <li className="flex items-center justify-between gap-1">
                  <div>
                    <p className="text-xs text-primary ">컴퓨터공학과</p>
                    <p>친구2</p>
                  </div>
                  <div className="flex gap-2">
                    <Button content="수락" size="fit" />
                    <Button content="거절" color="dark-blue" size="fit" />
                  </div>
                </li>
              ))}
            </>
          )}
        </Box>
      </div>
    </div>
  );
};
