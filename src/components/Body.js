import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
function Body(){

  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ])
  
  return (
    <RouterProvider router={appRouter}/>
  )
}
export default Body;