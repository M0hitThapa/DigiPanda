import { z } from "zod"

export const AuthCredentialsValidator = z.object({
    email:z.string().email(),
    password: z.string().min(8, {message:"password must be at least 8 character long."})
})
export type TAuthCredentuialsValidator = z.infer<typeof AuthCredentialsValidator>