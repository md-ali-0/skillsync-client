import { TQueryParam, TResponseRedux } from "@/types";
import { Skill } from "@/types/Skill";
import { baseApi } from "../../api/baseApi";

const skillsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSingleSkill: builder.query({
            query: (id) => {
                return {
                    url: `/skills/${id}`,
                };
            },
            providesTags: ["skills"],
        }),
        getAllSkills: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: TQueryParam) => {
                        if (item.value !== undefined) {
                            params.append(item.name, item.value as string);
                        }
                    });
                }
                return {
                    url: `/skills`,
                    params: params,
                };
            },
            transformResponse: (response: TResponseRedux<Skill[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                };
            },
            providesTags: ["skills"],
        }),
        createSkill: builder.mutation({
            query: (data) => {
                return {
                    url: "/skills",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["skills"],
        }),
        updateSkill: builder.mutation({
            query: (data) => {
                return {
                    url: `/skills/${data.id}`,
                    method: "PATCH",
                    body: data.data,
                };
            },
            invalidatesTags: ["skills"],
        }),
        deleteSkill: builder.mutation({
            query: (id) => {
                return {
                    url: `/skills/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["skills"],
        }),
    }),
});

export const {
    useGetAllSkillsQuery,
    useGetSingleSkillQuery,
    useCreateSkillMutation,
    useUpdateSkillMutation,
    useDeleteSkillMutation,
} = skillsApi;
