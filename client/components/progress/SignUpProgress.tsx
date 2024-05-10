import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const SignUpProgress = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="flex items-center gap-2 overflow-hidden overflow-x-scroll hide-scrollbar">
      {/* //? STEP 1 */}
      <div
        className={cn(
          'flex items-center gap-2  w-max p-2 rounded-sm whitespace-nowrap',
          {
            'bg-neutral-200 cursor-pointer': currentStep === 1,
            'cursor-not-allowed': currentStep !== 1,
          }
        )}
      >
        <div
          className={cn(
            'flex items-center justify-center p-1 h-5 w-5 rounded-full',
            {
              'bg-black text-white': currentStep === 1,
              'border border-gray-2 text-gray-2': currentStep !== 1,
            }
          )}
        >
          {currentStep < 2 && <span className="text-xs">1</span>}
          {currentStep !== 1 && <Check className="size-5" strokeWidth={2} />}
        </div>

        <span className="text-sm">Enter personal details</span>
      </div>

      {/* //? STEP 2 */}
      <div
        className={cn(
          'flex items-center gap-2 w-max p-2 rounded-sm whitespace-nowrap',
          {
            'bg-neutral-200 cursor-pointer': currentStep === 2,
            'cursor-not-allowed': currentStep !== 2,
          }
        )}
      >
        <div
          className={cn(
            'flex items-center justify-center p-1 h-5 w-5 rounded-full text-white',
            {
              'bg-black text-white': currentStep === 2,
              'border border-gray-2 text-gray-2': currentStep !== 2,
            }
          )}
        >
          {currentStep < 3 && <span className="text-xs">2</span>}
          {currentStep !== 2 && <Check className="size-5" strokeWidth={2} />}
        </div>

        <span className="text-sm">Enter personal details</span>
      </div>

      {/* //? STEP 3 */}
      <div
        className={cn(
          'flex items-center gap-2 w-max p-2 rounded-sm whitespace-nowrap',
          {
            'bg-neutral-200 cursor-pointer': currentStep === 3,
            'cursor-not-allowed': currentStep !== 3,
          }
        )}
      >
        <div
          className={cn(
            'flex items-center justify-center p-1 h-5 w-5 rounded-full text-white',
            {
              'bg-black text-white': currentStep === 3,
              'border border-gray-2 text-gray-2': currentStep !== 3,
            }
          )}
        >
          <span className="text-xs">3</span>
        </div>

        <span className="text-sm">Set password</span>
      </div>
    </div>
  );
};
export default SignUpProgress;
