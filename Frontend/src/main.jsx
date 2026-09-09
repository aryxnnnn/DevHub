import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from "./store/store.js"
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/LoginPage.jsx" ; 
import SignupPage from './pages/SignupPage.jsx' ; 
import HomePage from './pages/HomePage.jsx'
import ProfilePage from "./pages/ProfilePage.jsx" ; 
import SettingPage from "./pages/SettingPage.jsx" ; 
import ConnectionsPage from './pages/ConnectionsPage.jsx'


import AuthLayout from './comps/AuthLayout.jsx'
import RequestsPage from './pages/RequestsPage.jsx'


const router = createBrowserRouter([
  {
    path :"/" , 
    element : <App/> , 
    children : [
      {index: true , element : (    
        <AuthLayout authentication={true}>
        <HomePage />
        </AuthLayout>)
      } , 
      { path: "/login" , element :(
          <AuthLayout authentication = {false}>
            <LoginPage/>
          </AuthLayout>
        )
      },
      { path: "/signup" , element :(
          <AuthLayout authentication = {false}>
            <SignupPage/>
          </AuthLayout>
        )
      },
      { path: "/profile/view" , element :(
          <AuthLayout authentication = {true}>
            <ProfilePage/>
          </AuthLayout>
        )
      },
      { path: "/profile/edit" , element :(
          <AuthLayout authentication = {true}>
            <ProfilePage/>
          </AuthLayout>
        )
      },
      // { path: "/profile/password" , element :(
      //     <AuthLayout authentication = {true}>
      //       <SettingPage/>
      //     </AuthLayout>
      //   )
      // },
      { path: "/user/requests" , element :(
          <AuthLayout authentication = {true}>
            <RequestsPage/>
          </AuthLayout>
        )
      },
      { path: "/user/connections" , element :(
          <AuthLayout authentication = {true}>
            <ConnectionsPage/>
          </AuthLayout>
        )
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
