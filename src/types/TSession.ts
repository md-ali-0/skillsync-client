
export type TSession  = {
    isAuth: boolean;
    user: number | null
    role: "ADMIN" | "LEARNER" | "TEACHER" | "GUEST";
}
