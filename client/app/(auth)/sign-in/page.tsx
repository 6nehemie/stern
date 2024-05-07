import { auth } from '@/constants';
import Image from 'next/image';

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

      <div className="max-w-[645px] w-full"></div>
    </section>
  );
};
export default SignIn;
