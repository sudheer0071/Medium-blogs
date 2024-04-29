import { Hono } from 'hono' 
import { cors } from 'hono/cors' 
import { userRouter } from './route/users'
import { blogRouter } from './route/blogs'
const app = new Hono()

app.use(cors())
app.route('/api/v1/users',userRouter)
app.route('/api/v1/blogs',blogRouter)
app.get('/',async(c)=>{
  return c.text('backend is wokring fine for index.ts')
})

 
export default app
