import Image from 'next/image';
import { newReg, signIn, signUp } from '@/constants';
import { cn } from '@/lib/utils';

const page = () => {
  return (
    <div>
      <Image
        src={newReg.wallpaper}
        width={2584}
        height={3479}
        alt="wallpaper"
        className="object-cover object-left-bottom h-screen w-screen"
        priority
      />

      <section className={cn('relative xl:grid xl:grid-cols-2')}>
        <div className=" max-xl:hidden sign-up-images-height overflow-hidden"></div>

        <div className="sign-up-images-height px-8 xs:px-10 sm:px-[54px] lg:px-[76px] min-[1500px]:px-[90px] overflow-hidden overflow-y-auto"></div>
      </section>
    </div>
  );
};
export default page;
