import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const FallbackLayout = () => (
  <div className="flex h-full w-full flex-col justify-center">
    <Suspense>
      <Outlet />
    </Suspense>
  </div>
);
