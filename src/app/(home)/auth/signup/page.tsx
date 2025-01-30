import SignupForm from "@/components/auth/signup-form";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function SignupPage() {
    return (
        <div className="container flex items-center justify-center min-h-screen px-4 py-12">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">
                        Create your account
                    </CardTitle>
                    <CardDescription className="text-center">
                        It&apos;s totally free and super easy
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <SignupForm />
                    <p className="mt-4 text-sm text-center text-muted-foreground">
                        Already have an account?{" "}
                        <Link
                            href="/auth/signin"
                            className="font-medium text-primary hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
