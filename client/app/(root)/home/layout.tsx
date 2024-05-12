import AppNavbar from '@/components/navigation/AppNavbar';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-stern-primary min-h-screen">
      <AppNavbar />
      <div className="p-side">{children}</div>
    </div>
  );
};
export default layout;
