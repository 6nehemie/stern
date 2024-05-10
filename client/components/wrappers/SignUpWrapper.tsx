import SignUpForm from '@/components/forms/SignUpForm';
import { signUp } from '@/constants';
import Image from 'next/image';
import { ReactNode } from 'react';

const SignUpWrapper = ({ children }: { children?: ReactNode }) => {
  return (
    <section className="relative xl:grid xl:grid-cols-2">
      <div className=" max-xl:hidden sign-up-images-height overflow-hidden">
        <Image
          src={signUp.images.three}
          width={2584}
          height={3479}
          alt="wallpaper"
          className="object-cover object-left-bottom h-full w-full"
          priority
        />
      </div>

      <div className="sign-up-images-height px-8 xs:px-10 sm:px-[54px] lg:px-[76px] min-[1500px]:px-[90px] overflow-hidden overflow-y-auto">
        {children}
      </div>
    </section>
  );
};
export default SignUpWrapper;
