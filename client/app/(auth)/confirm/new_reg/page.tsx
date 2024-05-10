'use client';

import { newReg } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NewReg = () => {
  const router = useRouter();

  //? Redirect to home page after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/home');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <section className={cn('h-screen  relative xl:grid xl:grid-cols-2')}>
      <Image
        src={newReg.wallpaper}
        width={2584}
        height={3479}
        alt="wallpaper"
        className="object-cover object-center h-screen w-screen absolute z-[-1] col-start-1 col-end-3 row-start-1 row-end-2"
        priority
      />
      <div className=" max-xl:hidden h-screen overflow-hidden row-start-1 row-end-2 col-start-1 col-end-2"></div>

      <div className="absolute z-[10] h-screen pt-36 px-8 xs:px-10 sm:px-[54px] lg:px-[76px] min-[1500px]:px-[90px] overflow-hidden overflow-y-auto row-start-1 row-end-2 col-start-2 col-end-3 space-y-20 max-w-[700px] w-full">
        <div className="mt-12 space-y-10 text-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-3xl min-[1460px]:text-4xl">
            Welcome to Stern! Your account has been successfully created.
          </h1>
        </div>

        <p className="text-white text-xl md:text-2xl">
          You are going to be redirected.
        </p>
      </div>
    </section>
  );
};
export default NewReg;
