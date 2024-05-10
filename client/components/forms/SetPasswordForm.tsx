'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import SignUpProgress from '../progress/SignUpProgress';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Check, Loader2, X } from 'lucide-react';

const formSchema = z.object({
  password: z
    .string()
    .nonempty({ message: 'Please enter a password.' })
    .min(8, { message: 'Password must be at least 8 characters.' })
    .max(16, { message: 'Password must be less than 16 characters.' })

    //? check if password contains numbers
    .refine(
      (password) => {
        const hasNumber = /\d/.test(password);
        return hasNumber;
      },
      {
        message: 'Password must contain at least one number.',
      }
    )
    //? check for uppercase letters and lowercase letters
    .refine(
      (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        return hasUpperCase && hasLowerCase;
      },
      {
        message:
          'Password must contain at least one uppercase and one lowercase letter.',
      }
    )
    //? check for special characters
    .refine(
      (password) => {
        const hasSpecialCharacter =
          /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
        return hasSpecialCharacter;
      },
      {
        message:
          'Password must contain at least one special character. !@#$%^&*()_+-=[]{};:\'"\\|,.<>/?',
      }
    ),
});

const SetPasswordForm = () => {
  const [currentStep, setCurrentStep] = useState(3);
  const [passwordValue, setPasswordValue] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    // setCurrentStep(2);
  }

  return (
    <div className="pb-[70px]">
      <div className="mt-12 space-y-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-3xl min-[1460px]:text-4xl">
          Create a password for your Stern Account.
        </h1>

        <SignUpProgress currentStep={currentStep} />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn('space-y-8 mt-24 max-w-[441px] w-full', {
            hidden: currentStep !== 3,
          })}
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem
                  onChange={(e: any) => setPasswordValue(e.target.value)}
                >
                  <FormLabel className="text-sm">Password *</FormLabel>
                  <FormControl>
                    <Input placeholder="" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-[15px] space-y-4">
              <p className="">
                Enter a strong password for your Porsche ID account. Your
                password must contain
              </p>

              <ul className="ml-4 space-y-3 list-disc">
                <li>
                  <span>at least 8 characters</span>

                  {passwordValue.length < 8 ? (
                    <X
                      className={cn('size-5 text-red-500 inline-block ml-2')}
                      strokeWidth={1.6}
                    />
                  ) : (
                    <Check
                      className={cn('size-5 text-green-600 inline-block ml-2')}
                      strokeWidth={1.8}
                    />
                  )}
                </li>

                <li>
                  <span>numbers</span>

                  {!/\d/.test(passwordValue) ? (
                    <X
                      className={cn('size-5 text-red-500 inline-block ml-2')}
                      strokeWidth={1.6}
                    />
                  ) : (
                    <Check
                      className={cn('size-5 text-green-600 inline-block ml-2')}
                      strokeWidth={1.8}
                    />
                  )}
                </li>

                <li>
                  <span>upper and lower-case letters</span>
                  {!/[A-Z]/.test(passwordValue) ||
                  !/[a-z]/.test(passwordValue) ? (
                    <X
                      className={cn('size-5 text-red-500 inline-block ml-2')}
                      strokeWidth={1.6}
                    />
                  ) : (
                    <Check
                      className={cn('size-5 text-green-600 inline-block ml-2')}
                      strokeWidth={1.8}
                    />
                  )}
                </li>

                <li>
                  <span>and special characters.</span>
                  {!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
                    passwordValue
                  ) ? (
                    <X
                      className={cn('size-5 text-red-500 inline-block ml-2')}
                      strokeWidth={1.6}
                    />
                  ) : (
                    <Check
                      className={cn('size-5 text-green-600 inline-block ml-2')}
                      strokeWidth={1.8}
                    />
                  )}
                </li>
              </ul>
            </div>
          </div>

          <Button type="submit" className="h-[52px] font-light px-6">
            <Loader2
              className={cn('mr-2 h-4 w-4 animate-spin', {
                hidden: true,
              })}
            />
            <span>Set Password</span>
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default SetPasswordForm;
