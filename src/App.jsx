import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Paste from './Paste'
import ViewPaste from './View_Paste'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    )
  },
  {
    path: '/pastes',
    element: (
      <div>
        <Navbar />
        <Paste />
      </div>
    )
  },
  {
    path: '/pastes/:id',
    element: (
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    )
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
