'use client';

import Link from 'next/link';
import Logo from '../icons/Logo/Logo';
import { User, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import containsPath from '@/utils/functions/containsPath';
import containsSpecificPath from '@/utils/functions/containsSpecificPath';

const Navbar = () => {
  const pathname = usePathname();

  const navHiddenList = ['/sign-in'];
  const withBorderList = ['/sign-up', '/confirm'];
  const navTransparentList = ['/confirm/new_reg'];
  const stickyList = ['/sign-up', '/confirm', '/confirm/new_reg'];

  const shouldNotRender = containsPath(pathname, navHiddenList);

  const shouldBeTransparent = containsPath(pathname, navTransparentList);

  const shouldHaveBorder =
    containsPath(pathname, withBorderList) &&
    !containsSpecificPath(pathname, ['/confirm/new_reg']);

  const shouldBeSticky =
    containsPath(pathname, stickyList) &&
    !containsSpecificPath(pathname, ['/confirm/new_reg']);

  return (
    <nav
      className={cn('top-0 z-[100] w-full', {
        hidden: shouldNotRender,
        'bg-transparent text-white': shouldBeTransparent,
        'bg-white': !shouldBeTransparent,
        // 'border-b border-neutral-200': shouldHaveBorder,
        sticky: shouldBeSticky,
        fixed: !shouldBeSticky,
      })}
    >
      <div
        className={cn(
          ' grid grid-cols-3 p-side max-w-[1760px] h-[80px] items-center mx-auto'
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
