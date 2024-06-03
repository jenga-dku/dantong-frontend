import { forwardRef } from 'react';

export const Intersection = forwardRef<HTMLDivElement>((_, ref) => {
  return <div ref={ref} />;
});
