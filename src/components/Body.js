import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Player from "./Player";


function Body(){

  
  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    },
    {
      path: "/player/:contentType/:videoId",
      element: <Player />,
    },
  ])

 
  
  return (
    <RouterProvider router={appRouter}/>
  )
}
export default Body;