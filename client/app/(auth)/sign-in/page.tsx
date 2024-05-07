import SignInForm from '@/components/forms/SignInForm';
import Stern from '@/components/icons/Logo/Stern';
import { auth, signIn } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const SignIn = () => {
  return (
    <section className="auth-grid h-screen">
      <div className="max-lg:hidden">
        <Image
          src={auth.wallpaper}
          width={4096}
          height={2731}
          alt="wallpaper"
          className="h-full object-cover object-right-bottom"
        />
      </div>

      <div className="max-w-[645px] mx-auto w-full flex items-center justify-center h-full ">
        <div className="max-w-[320px] w-full space-y-4">
          <div className="mx-auto w-max mb-8">
            <Stern />
          </div>

          <h1 className="text-xl font-medium mt-8">{signIn.message}</h1>

          <SignInForm />

          {/* Or */}

          {/* Github Sign In */}

          <p className="text-sm">
            <span>Don&apos;t have an account yet ? </span>
            <Link href={'/sign-up'} className="underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default SignIn;
