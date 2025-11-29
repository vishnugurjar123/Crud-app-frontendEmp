import { RouterProvider } from 'react-router-dom'
import { myRoutes } from './routes/Routing'
import { Toaster } from 'react-hot-toast'
import SignupPage from './pages/SignupPage'
const App = () => {
  return (
    <div>
      
      <Toaster   position="top-right" reverseOrder={false}
/>
     
      <RouterProvider router={myRoutes}/>
    </div>
  )
}

export default App