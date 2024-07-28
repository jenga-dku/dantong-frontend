import { TopBar } from '@components/TopBar';
import { Nav } from '@components/Nav';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useRef } from 'react';
import { useTopBarStore } from '@stores/topBar-stores';
import { Axios } from '@api/Axios';
import { HTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export const LayoutVariants = cva(
  `flex w-full flex-col overflow-auto bg-[#EBF4FF] px-5 pb-[100px] pt-[60px]`,
  {
    variants: {},
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface LayoutProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof LayoutVariants> {
  children?: ReactNode;
}

export const Layout = ({ className, ...props }: LayoutProps) => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const {
    isBackButtonVisible,
    setIsBackButtonVisible,
    isNotificationButtonVisible,
    setIsNotificationButtonVisible,
  } = useTopBarStore();

  // 페이지 전환시 로직
  useEffect(() => {
    isBackButtonVisible && setIsBackButtonVisible(false); // 뒤로가기 버튼 true인 경우에 false로 초기화
    isNotificationButtonVisible || setIsNotificationButtonVisible(true);
    layoutRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <>
      <TopBar />
      <div className={cn(LayoutVariants(), className)} {...props}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Nav />
      <Axios />
    </>
  );
};
