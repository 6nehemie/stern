import { dashboard, user } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className="pt-[140px] space-y-[160px]">
      <div className="space-y-20">
        <h1 className="text-lg">
          Welcome {user.firstName} {user.lastName}
        </h1>

        <div className="flex flex-col items-center">
          <div className="space-y-2 text-center mb-10">
            <h2 className="text-2xl font-semibold">
              {dashboard.noBooking.title}
            </h2>
            <p className="max-w-[924px]">{dashboard.noBooking.message}</p>
          </div>

          <Link
            href="/sign-in"
            className="flex items-center w-max font-light text-sm h-[52px] px-6 py-2 text-white bg-black rounded-sm hover:bg-neutral-800 transition-colors duration-200"
          >
            Make a reservation
          </Link>

          <Image
            src={dashboard.noBooking.image}
            alt="No booking"
            height={360}
            width={860}
          />
        </div>
      </div>

      <div>test</div>
    </div>
  );
};
export default page;
