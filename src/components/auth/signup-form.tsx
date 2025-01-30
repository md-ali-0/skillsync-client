"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSignUpUserMutation } from "@/redux/features/auth/authApi";
import { SignupSchema } from "@/schema/signup.schema";
import type { ErrorResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SerializedError } from "@reduxjs/toolkit";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = SignupSchema.extend({
    termsAccepted: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function SignupForm() {
    const [signupUser, { isSuccess, isError, error }] = useSignUpUserMutation();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            termsAccepted: false,
        },
    });

    useEffect(() => {
        if (isError) {
            const errorResponse = error as ErrorResponse | SerializedError;
            const errorMessage =
                (errorResponse as ErrorResponse)?.data?.message ||
                "Something Went Wrong";
            toast.error(errorMessage);
        }
        if (isSuccess) {
            toast.success("User Created Successfully");
            router.push("/auth/signin");
        }
    }, [error, isError, isSuccess, router]);

    const onSubmit = async (data: FormValues) => {
        await signupUser(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your full name"
                                    {...field}
                                />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Enter your password"
                                        {...field}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-muted-foreground" />
                                        )}
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    By creating an account, you agree to our{" "}
                                    <Link
                                        href="/terms-and-conditions"
                                        className="text-primary hover:underline"
                                    >
                                        Terms and Conditions
                                    </Link>
                                    , and our{" "}
                                    <Link
                                        href="/privacy-policy"
                                        className="text-primary hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>
                                </FormLabel>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">
                    Sign up
                </Button>
            </form>
        </Form>
    );
}
