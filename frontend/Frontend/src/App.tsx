import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import { EditBlog } from './pages/EditBlog'
function App() {

  return ( 
    <div>
      {/* <h1>Home page</h1> */}
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} /> 
          <Route path='publish' element={<Publish/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id/edit" element={<EditBlog />} />
        </Routes>
      </BrowserRouter>
    </>
    </div>
  )
}

export default App