import * as z from "zod";

export const skillSchema = z.object({
    name: z.string().min(1, "Skill name is required"),
    category: z.enum([
        "TECHNICAL",
        "CREATIVE",
        "ACADEMIC",
        "BUSINESS",
        "OTHER",
    ]),
});
