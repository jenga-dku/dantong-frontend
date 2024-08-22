import { ReactNode } from 'react';

export const Wrapper = (props: { children: ReactNode; className: string }) => (
  <div {...props}>{props.children}</div>
);
