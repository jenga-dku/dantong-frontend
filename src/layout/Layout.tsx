import { TopBar } from '@components/TopBar';
import { Nav } from '@components/Nav';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useRef } from 'react';
import { useTopBarStore } from '@stores/topBar-stores';
import { Axios } from '@api/Axios';
import { HTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { useAuthStore } from '@/stores/auth-stores';
import { useReissueToken } from '@/query-hooks/user';
import { getTimeDifference } from '@/utils/getTimeDifference';

export const LayoutVariants = cva(
  `flex w-full flex-col overflow-auto bg-[#EBF4FF] px-5 pb-[60px] pt-[45px]`,
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

const TOKEN_EXPIRED_TIME = 3500000;

export const Layout = ({ className, ...props }: LayoutProps) => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { isTokenIssued, setIsTokenIssued } = useAuthStore();
  const { mutate: reissueToken } = useReissueToken();
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

  useEffect(() => {
    const tokenDate = localStorage.getItem('tokenDate');
    if (tokenDate) {
      const remainTime = TOKEN_EXPIRED_TIME - getTimeDifference(tokenDate);
      isTokenIssued &&
        setTimeout(() => {
          setIsTokenIssued(false);
          reissueToken();
        }, remainTime);
    }
  }, [isTokenIssued]);

  return (
    <>
      <TopBar />
      <div className={cn(LayoutVariants(), className)} {...props}>
        <div
          style={{
            width: '100%',
            marginTop: 'calc(env(safe-area-inset-top)*0.6)',
          }}
        />
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Nav />
      <Axios />
    </>
  );
};
