import {TypeOf, z} from 'zod'

export const signupSchema = z.object({
  email:z.string().email(),
  password:z.string().min(5),
  name:z.string().optional()
})

export type signupInput = z.infer<typeof signupSchema>