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
import { Loader2, MailPlus } from 'lucide-react';
import Link from 'next/link';
import { Checkbox } from '../ui/checkbox';

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }).max(50),
  middleName: z.string().max(50).optional(),
  lastName: z.string().min(1, { message: 'Last name is required' }).max(50),
  email: z.string().min(1, { message: 'email is required' }).email(),
  termsAndConditions: z.boolean().refine((value) => !!value, {
    message: 'Terms and conditions must be accepted.',
  }),
  dataPrivacyStatement: z
    .boolean()
    .default(false)
    .refine((value) => !!value, {
      message: 'Data privacy statement must be accepted.',
    }),
});

const SignUpForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      termsAndConditions: false,
      dataPrivacyStatement: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setCurrentStep(2);
  }

  console.log('Current values:', form.getValues());

  return (
    <div>
      <div className="mt-12 space-y-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-3xl min-[1460px]:text-4xl">
          Create your Stern Account.
        </h1>

        <SignUpProgress currentStep={currentStep} />
      </div>

      <div
        className={cn(
          'mt-10 lg:mt-20 max-lg:block max-[1280px]:flex gap-2 text-lg md:text-xl lg:text-2xl w-max mb-10',
          {
            hidden: currentStep !== 1,
          }
        )}
      >
        <p className="whitespace-nowrap">
          Create your personal
          <span className="font-medium"> Stern </span>
          Account,{' '}
        </p>

        <p className="whitespace-nowrap"> your access to the world of Stern.</p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn('space-y-8', {
            hidden: currentStep !== 1,
          })}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">First name *</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Middle name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Last name *</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">E-mail address *</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <FormField
              control={form.control}
              name="termsAndConditions"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <FormLabel className="cursor-pointer">
                      I have read the general{' '}
                      <Link href="/" className="underline">
                        terms and conditions
                      </Link>{' '}
                      and I accept them. *
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dataPrivacyStatement"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <FormLabel className="cursor-pointer">
                      I have read and accepted the{' '}
                      <Link href="/" className="underline">
                        Data Privacy Statement
                      </Link>{' '}
                      . *
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="h-[52px] font-light px-6">
            <Loader2
              className={cn('mr-2 h-4 w-4 animate-spin', {
                hidden: true,
              })}
            />
            <span>Create Stern Account</span>
          </Button>
        </form>
      </Form>

      <div
        className={cn('mt-10 lg:mt-20 space-y-5', {
          hidden: currentStep !== 2,
        })}
      >
        <h3 className="text-lg font-medium">
          We have sent an e-mail to{' '}
          <span className="font-semibold">{form.getValues('email')}</span>.
          Please confirm the e-mail to activate your Porsche ID Account.
        </h3>

        <p>
          If you have not received the e-mail after a few minutes, please check
          your spam folder. You did not get a confirmation mail?
        </p>

        <button className="flex items-center gap-2 btn-detail p-1">
          <MailPlus className="size-5" strokeWidth={1.3} />
          <span>Re-send e-mail</span>
        </button>
      </div>
    </div>
  );
};
export default SignUpForm;
