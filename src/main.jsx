import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom'
import Country from './pages/Country.jsx'
import Home from './pages/Home.jsx'


const CountryRoute = () => {
  const { countryId } = useParams()
  return <Country country={ countryId } />

}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: ":countryId",
        element: <CountryRoute />
        
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={ router }/>
  </React.StrictMode>,
)
