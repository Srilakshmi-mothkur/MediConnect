import { z } from "zod";

export const userFormValidation = z.object({
    name: z.string()
    .min(2,"Name must be at least 2 characters.")
    .max(2,"Name must be at most 2 characters."),

    email: z.string().email("Invalid emailaddress"),

    phone: z.string().refine((phone) => /^\+?[1-9]\d{1,14}$/.test(phone), 'Invalid phone number')
})