import { PropsWithChildren } from 'react';

export const FlavoredText: React.FC<PropsWithChildren> = ({ children }) => {
  return <span style={{ color: '#1ae8e8' }}>{children}</span>;
};