import {TypeOf, z} from 'zod'

export const signupSchema = z.object({
  email:z.string().email(),
  password:z.string().min(5),
  name:z.string().optional()
}) 

export const signinSchema = z.object({
  email:z.string().email(),
  password:z.string().min(5)
})
 
export const createBlogSchema = z.object({
  title:z.string(),
  content:z.string()
}) 

export const updateBlogSchema = z.object({
  title:z.string(),
  content:z.string(),
  id:z.string()
})

export type signupInput = z.infer<typeof signupSchema>
export type signinInput = z.infer<typeof signinSchema>
export type createBlogInput = z.infer<typeof createBlogSchema>
export type updateBlogInput = z.infer<typeof updateBlogSchema>