import { forwardRef } from 'react';
type DivProps = React.HTMLProps<HTMLDivElement>;

export const Intersection = forwardRef<HTMLDivElement, DivProps>(
  (props, ref) => {
    return <div ref={ref}>{props.children}</div>;
  },
);
