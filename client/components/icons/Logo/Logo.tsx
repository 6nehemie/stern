import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn('text-xl font-orbitron font-normal w-max', {
        [`${className}`]: className,
      })}
    >
      stern
    </div>
  );
};
export default Logo;
