import { TopBar } from './TopBar';
import { Nav } from './Nav';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useTopBarStore } from '../stores/topBar-stores';

export const Layout = ({ className }: { className?: string }) => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const {
    isBackButtonVisible,
    setIsBackButtonVisible,
    isNotificationButtonVisible,
    setIsNotificationButtonVisible,
  } = useTopBarStore();

  // 페이지 전환시 로직
  useEffect(() => {
    isBackButtonVisible && setIsBackButtonVisible(false); // 뒤로가기 버튼 true인 경우에 false로 초기화
    isNotificationButtonVisible && setIsNotificationButtonVisible(true);
    layoutRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <TopBar />
      <div
        ref={layoutRef}
        className={`flex w-full flex-col overflow-auto bg-[#EBF4FF] px-5 pb-[100px] pt-[60px] ${className}`}
      >
        <Outlet />
      </div>
      <Nav />
    </>
  );
};
