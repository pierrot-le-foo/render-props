import React from 'react';

export interface RenderPropsProps {
  children: React.ComponentType;
}

export default function RenderProps({ children: Component }: RenderPropsProps) {
  return (
    <Component />
  )
}