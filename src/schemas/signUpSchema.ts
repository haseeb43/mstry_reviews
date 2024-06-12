import { any, z } from "zod"

export const usernameValidation = z
    .string()
    .min(2, "username must be atleast 2 characters")
    .max(20, "username must be no more than 20 characters")
    .regex(/^[a-zA-Z0-9]+$/, "username must not contain special chracter")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid email" }),
    password:z.string().min(6,{message:"password must at least 6 characters"})
})
