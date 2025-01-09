import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}
export default function Content({ children }: ContentProps) {
  return <div>{children}</div>;
}
