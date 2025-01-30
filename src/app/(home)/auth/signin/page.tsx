import SigninForm from "@/components/auth/signin-form";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function SigninPage() {
    return (
        <div className="container flex items-center justify-center min-h-screen px-4 py-12">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">
                        Sign in to your account
                    </CardTitle>
                    <CardDescription className="text-center">
                        Login to your account for a faster checkout.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <SigninForm />
                    <p className="mt-4 text-sm text-center text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/auth/signup"
                            className="font-medium text-primary hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
