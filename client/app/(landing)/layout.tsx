import Navbar from '@/components/navigation/Navbar';
import { ReactNode } from 'react';

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
export default LandingLayout;
