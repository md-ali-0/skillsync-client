import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (data) => {
                return {
                    url: "/auth/signin",
                    body: data,
                    method: "POST",
                };
            },
        }),
        SignUpUser: builder.mutation({
            query: (data) => {
                return {
                    url: "/auth/signup",
                    body: data,
                    method: "POST",
                };
            },
        }),
        forgetPassword: builder.mutation({
            query: (data) => {
                return {
                    url: "/auth/forgot-password",
                    body: data,
                    method: "POST",
                };
            },
        }),
        resetPassword: builder.mutation({
            query: ({ id, newPassword, token }) => ({
                url: "/auth/reset-password",
                method: "POST",
                body: { id, newPassword },
                headers: {
                    Authorization: token,
                },
            }),
        }),
    }),
});

export const {
    useLoginUserMutation,
    useSignUpUserMutation,
    useForgetPasswordMutation,
    useResetPasswordMutation,
} = authApi;
