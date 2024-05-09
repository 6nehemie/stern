'use client';

import Link from 'next/link';
import Logo from '../icons/Logo/Logo';
import { User, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const shouldNotRender = ['/sign-in'].includes(pathname);

  return (
    <nav
      className={cn('border-b border-neutral-200 bg-white w-full', {
        hidden: shouldNotRender,
      })}
    >
      <div
        className={cn(
          'sticky top-0 z-[100] grid grid-cols-3 p-side max-w-[1760px] h-[80px] items-center mx-auto'
        )}
      >
        <Link href={'/'} className=" w-max">
          <Logo className="" />
        </Link>

        <div>
          {/* <button className="flex items-center gap-2 btn-detail p-1">
          <Menu className="size-5" strokeWidth={1.3} />
          <span className="text-sm">Menu</span>
        </button> */}
        </div>

        <div className="flex justify-end">
          <Link href="/sign-in" className="self-end p-1 m-2 btn-detail">
            <User className="size-5" strokeWidth={1.2} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
