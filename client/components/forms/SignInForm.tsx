'use client';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
});

const formSchemaStep2 = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
});

const SignInForm = () => {
  const [emailResult, setEmailResult] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);

  // 1. Define your form.
  const formStep1 = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const formStep2 = useForm<z.infer<typeof formSchemaStep2>>({
    resolver: zodResolver(formSchemaStep2),
    defaultValues: {
      email: emailResult!,
      password: '',
    },
  });

  // 2. Define a submit handler.
  function checkEmail(values: z.infer<typeof formSchema>) {
    // check if email exists in the database
    console.log(values);
    setEmailResult(values.email);
    setCurrentStep(2);
  }

  function onSubmit(values: z.infer<typeof formSchemaStep2>) {
    // submit user data to the server
    console.log(values);
  }

  return (
    <>
      <Form {...formStep1}>
        <form
          onSubmit={formStep1.handleSubmit(checkEmail)}
          className={cn('space-y-6', {
            hidden: currentStep !== 1,
          })}
        >
          <FormField
            control={formStep1.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel className="font-rajdhani">Email</FormLabel> */}
                <FormControl>
                  <Input
                    placeholder="Email*"
                    type="email"
                    className="lowercase"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="h-[52px] w-full font-light">
            <Loader2
              className={cn('mr-2 h-4 w-4 animate-spin', {
                hidden: true,
              })}
            />
            <span>Continue</span>
          </Button>
        </form>
      </Form>

      <Form {...formStep2}>
        <form
          onSubmit={formStep2.handleSubmit(onSubmit)}
          className={cn('space-y-6', {
            hidden: currentStep !== 2,
          })}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm py-2 px-6 border-2 border-gray-2 rounded-md h-[52px] w-full">
              <span className="font-medium">{emailResult}</span>
              <div
                onClick={() => {
                  setCurrentStep(1);
                  setEmailResult(null);
                }}
                className="cursor-pointer hover:font-medium"
              >
                Edit
              </div>
            </div>

            <FormField
              control={formStep2.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="font-rajdhani">Email</FormLabel> */}
                  <FormControl>
                    <Input
                      placeholder="Enter your password*"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <p className="text-sm underline cursor-pointer">
                Password forgotten ?
              </p>
            </div>
          </div>

          <Button type="submit" className="h-[52px] w-full font-light">
            <Loader2
              className={cn('mr-2 h-4 w-4 animate-spin', {
                hidden: true,
              })}
            />
            <span>Continue</span>
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignInForm;
