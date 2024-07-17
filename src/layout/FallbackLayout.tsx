import { Outlet } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { Suspense } from 'react';

export const FallbackLayout = () => (
  <div className="flex h-full w-full flex-col justify-center">
    <Suspense fallback={<Loader type="clip" />}>
      <Outlet />
    </Suspense>
  </div>
);
