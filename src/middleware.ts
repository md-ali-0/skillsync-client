import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { decrypt, DecryptedSession } from "./lib/session";

const roleBasedAccess: { [key: string]: string[] } = {
    "/admin": ["ADMIN"],
    "/dashboard": ["ADMIN", "TEACHER", "LEARNER"],
};

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const cookie = req.cookies.get("session")?.value;

    let session: DecryptedSession | undefined = {
        user: null,
        role: "GUEST",
        iat: 0,
        exp: 0,
    };

    if (cookie) {
        session = await decrypt(cookie);
    }

    if (!session?.user) {
        if (pathname.startsWith("/auth")) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(
                new URL(`/auth/signin?redirect=${pathname}`, req.url)
            );
        }
    } else if (session?.user && pathname.startsWith("/auth")) {
        return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    const requiredRole = Object.keys(roleBasedAccess).find((route) =>
        pathname.startsWith(route)
    );

    if (requiredRole) {
        const allowedRoles = roleBasedAccess[requiredRole];
        if (!allowedRoles.includes(session?.role)) {
            return NextResponse.redirect(new URL("/", req.nextUrl));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*"],
};

// The middleware function is responsible for checking the session cookie and role-based access. If the user is not authenticated, it will redirect to the login page. If the user is authenticated but doesn't have the required role, it will redirect to the home page.
// The  config  object is used to specify the routes that the middleware should run on. In this case, the middleware will run on all routes that start with  /dashboard .
// Step 4: Create the Dashboard Page
// Now that we have the middleware set up, let's create the dashboard page.
